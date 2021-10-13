//template of react hooks can used  for vscode or webstorm development template

// eslint-disable-next-line no-use-before-define
import React from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import store from '@/store'
function ReactHookTemplate(props) {
  const [uState, setState] = React.useState({ count: 111 })
  //redux相关
  // const countNum = useSelector((state:StateTy) => state.user)
  // const dispatch = useDispatch()
  // function testChangeState() {
  //   setState({
  //     ...uState,
  //     count: uState.count + 1000
  //   })
  // }
  const testStore = () => {
    // console.log("修改了store", store.getState());
    //dispatch({type: "R_countNum", data: countNum+1000})
    // store.dispatch({ type: 'R_countNum', data: countNum + 1000 })
    //this.props.A_countNum(30000);
  }

  // React.useEffect(() => {
  //   //like ComponentDidMount
  //   return (state: ObjTy) => {
  //     //like ComponentUnMount
  //     console.log(state)
  //   }
  // }, [])
  return <div>{props.name}</div>
}

//配置使用redux
export default connect((state) => ({
  name: state.user.name
}))(ReactHookTemplate)
