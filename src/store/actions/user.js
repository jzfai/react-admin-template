import * as types from '../action-types'
import { getInfoReq } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import { loginReq, logoutReq } from '@/api/user'

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

export const A_login = (reqData) => (dispatch) => {
  return new Promise((resolve, reject) => {
    loginReq({ username: reqData.username.trim(), password: reqData.password })
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
    logoutReq(token)
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
    getInfoReq(token)
      .then((response) => {
        const { data } = response
        const { username } = data
        let userInfo = {
          role: 'admin',
          username: username
        }
        dispatch(A_USER_USER_INFO(userInfo))
        console.log('我返回了')
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
