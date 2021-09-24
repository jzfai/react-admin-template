import request from '@/utils/axiosReq'

export function reqLogin(data) {
  return request({
    url: '/ty-user/user/loginValid',
    data: data,
    method: 'post',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function reqLogout(data) {
  return request({
    url: '/ty-user/user/loginOut',
    method: 'post',
    data
  })
}
