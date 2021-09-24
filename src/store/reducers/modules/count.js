//初始化状态
const initState = {
  countNum: 1
}
export default function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case 'R_countNum':
      return { ...preState, countNum: data }
    default:
      return preState
  }
}
