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
const errLogReq = (message) => {
  request({
    url: '/ty-user/errorCollection/insert',
    data: { pageUrl: window.location.href, errorLog: message },
    method: 'post',
    bfLoading: false,
    isAlertErrorMsg: true
  }).then(() => {
    bus.emit('reloadErrorPage')
  })
}
if (checkNeed()) {
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    const string = msg.toLowerCase()
    const substring = 'script error'
    if (string.indexOf(substring) > -1) {
      errLogReq('Script Error: See Browser Console for Detail')
    } else if (msg.indexOf('error') !== -1) {
      //只对error日志进行收集
      const message = [
        'Message: ' + msg,
        'URL: ' + url,
        'Line: ' + lineNo,
        'Column: ' + columnNo,
        'Error object: ' + JSON.stringify(error)
      ].join(' - ')
      errLogReq(message)
    }
    return false
  }
}
