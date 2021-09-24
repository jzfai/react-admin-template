import * as types from '../action-types'
import { reqUserInfo } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import { reqLogin, reqLogout } from '@/api/login'
export const A_login = (reqData) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogin({ username: reqData.username.trim(), password: reqData.password })
      .then((res) => {
        const { jwtToken, msg } = res?.data
        if (res.code === 20000) {
          dispatch(A_USER_TOKEN(jwtToken))
          setToken(jwtToken)
          resolve(res?.data)
        } else {
          reject(msg)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const A_logout = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogout(token)
      .then((res) => {
        if (res.code === 20000) {
          dispatch(A_resetUser())
          removeToken()
          resolve()
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const A_getUserInfo = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    resolve()
    // reqUserInfo(token)
    //   .then((response) => {
    //     const { data } = response
    //     if (data.status === 0) {
    //       const userInfo = data.userInfo
    //       dispatch(A_USER_USER_INFO(userInfo))
    //       resolve(data)
    //     } else {
    //       const msg = data.message
    //       reject(msg)
    //     }
    //   })
    //   .catch((error) => {
    //     reject(error)
    //   })
  })
}
export const A_USER_TOKEN = (data) => {
  return {
    type: types.USER_TOKEN,
    data
  }
}

export const A_USER_USER_INFO = (data) => {
  return {
    type: types.USER_USER_INFO,
    data
  }
}

export const A_resetUser = () => {
  return {
    type: types.USER_RESET
  }
}
