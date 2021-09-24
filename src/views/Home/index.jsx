/*react router store*/
import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import store from '@/store'
import { A_countNum } from '@/store/actions/count'
import { connect } from 'react-redux'
import { asyncRouters } from '@/router/config'
/*组件和hooks*/
/*本组件样式*/
/*antd*/
import { Menu, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, MailOutlined } from '@ant-design/icons'
const { SubMenu } = Menu
class App extends Component {
  state = {
    collapsed: false
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  testStore = () => {
    store.dispatch({ type: 'R_countNum', data: 10000 })
  }
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <div onClick={this.toggleCollapsed}>toggleCollapsed{this.collapsed}</div>
        <div onClick={this.testStore}>{this.props.countNum}</div>
      </Fragment>
    )
  }
}

export default connect(
  (state) => ({
    countNum: state.count.countNum
  }),
  {
    A_countNum
  }
)(App)
