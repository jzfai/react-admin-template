//同步action，就是指action的值为Object类型的一般对象
export const R_countNum = (data) => ({ type: 'R_countNum', data })
//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const A_countNum = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(R_countNum(data))
    }, time)
  }
}
