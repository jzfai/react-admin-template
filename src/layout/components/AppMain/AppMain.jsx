// eslint-disable-next-line no-use-before-define
import React from 'react'
import { connect } from 'react-redux'
import RenderRouterHook from './RenderRouterHook'
import './AppMain.scss'
function AppMain() {
  return (
    <div className="appMain-container">
      <RenderRouterHook />
    </div>
  )
}

//配置使用redux
export default connect(() => ({}))(AppMain)
