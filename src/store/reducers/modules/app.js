//初始化状态
const initState = {
  sidebar: {
    opened: true
  }
}
export default function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case 'R_app_sidebar_opened':
      return { ...preState, sidebar: { opened: data } }
    default:
      return preState
  }
}
