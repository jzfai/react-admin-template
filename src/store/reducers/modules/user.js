import * as types from '../../action-types'
import { getToken } from '@/utils/auth'
const userInfo = {
  name: '',
  role: 'admin',
  avatar: '',
  token: getToken()
}
export default function user(state = userInfo, action) {
  switch (action.type) {
    case types.USER_TOKEN:
      return {
        ...state,
        token: action.data
      }
    case types.USER_USER_INFO:
      return {
        ...state,
        ...data
      }
    case types.USER_RESET:
      return {}
    default:
      return state
  }
}
