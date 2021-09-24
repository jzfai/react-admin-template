import React from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import store from '@/store'
function TestHooks(props) {
  const [uState, setState] = React.useState({ count: 111 })
  //redux相关
  const countNum = useSelector((state) => state.count.countNum)
  const dispatch = useDispatch()
  function testChangeState() {
    setState({
      ...uState,
      count: uState.count + 1000
    })
  }
  const testStore = () => {
    // console.log("修改了store", store.getState());
    //dispatch({type: "R_countNum", data: countNum+1000})
    store.dispatch({ type: 'R_countNum', data: countNum + 1000 })
    //this.props.A_countNum(30000);
  }

  React.useEffect(() => {
    //类似于ComponentDidMount
    return (state) => {
      //类似于ComponentUnMount
    }
  }, [])
  return (
    <div>
      {/*<div onClick={testChangeState}>testChangeState</div>*/}
      {/*<div>这是testHooks函数{uState.count}</div>*/}
      {/*<div onClick={testStore}>这是testHooks函数{countNum}第二个{props.countNum}</div>*/}
    </div>
  )
}

//配置使用redux
export default connect((state) => ({
  countNum: state.count.countNum
}))(TestHooks)
