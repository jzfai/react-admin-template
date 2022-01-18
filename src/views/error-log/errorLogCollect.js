import request from '@/utils/axiosReq'
import bus from '@/utils/eventBus'
import setting from '@/settings'

const checkNeed = () => {
  const env = import.meta.env.VITE_APP_ENV
  let { errorLog } = setting
  if (typeof errorLog === 'string') {
    return env === errorLog
  }
  if (errorLog instanceof Array) {
    return errorLog.includes(env)
  }
  return false
}

import pack from '../../../package.json'
const errorLogReq = (errLog) => {
  request({
    url: '/integration-front/errorCollection/insert',
    data: {
      pageUrl: window.location.href,
      errorLog: errLog,
      browserType: navigator.userAgent,
      version: pack.version
    },
    method: 'post',
    bfLoading: false,
    isAlertErrorMsg: true
  }).then(() => {
    bus.emit('reloadErrorPage')
  })
}

if (checkNeed()) {
  //JS运行时错误和资源加载错误
  window.addEventListener(
    'error',
    ({ error, target }) => {
      if (target.outerHTML) {
        //img error collection
        let errLog = `${JSON.stringify(target.outerHTML)}`
        //console.log('errorString', errLog)
        errorLogReq(errLog)
      } else {
        let errLog = `${error.stack.substr(0, 300)}`
        //console.log('errorString', errLog)
        errorLogReq(errLog)
      }
    },
    //use Event capture  to collection  img error
    true
  )
  //promise被reject并且错误信息没有被处理的时候，会抛出一个unhandledrejection
  //接口错误处理，cross origin , 404,401
  window.addEventListener('unhandledrejection', ({ reason }) => {
    let errLog = ''
    if (typeof reason === 'string') {
      errLog = reason
    } else {
      errLog = `${reason.stack.substr(0, 300)}`
    }
    errorLogReq(errLog)
    //console.log('unhandledrejection:', errLog) // 捕获后自定义处理
  })

  //些特殊情况下，还需要捕获处理console.error，捕获方式就是重写window.console.error
  let _oldConsoleError = window.console.error
  window.console.error = function () {
    let errLog = Object.values(arguments).join(',')
    if (errLog.indexOf('custom') === -1) {
      errorLogReq(errLog)
    }
    _oldConsoleError && _oldConsoleError.apply(window, arguments)
  }
}
