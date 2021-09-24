/* react redux */
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import RenderRouterHook from './RenderRouterHook'
function AppMain(props) {
  React.useEffect(() => {
    // console.log('AppMain mount')
  }, [])
  return (
    <Fragment>
      <RenderRouterHook />
    </Fragment>
  )
}

//配置使用redux
export default connect((state) => ({
  countNum: state.count.countNum
}))(AppMain)
