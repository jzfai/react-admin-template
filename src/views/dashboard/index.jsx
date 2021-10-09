// eslint-disable-next-line no-use-before-define
import React from 'react'
import { connect } from 'react-redux'
import './index.less'
function index(props) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-text">name: {props.username}</div>
    </div>
  )
}

//配置使用redux
export default connect((state) => ({
  username: state.user.username
}))(index)
