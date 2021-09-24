import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//引入antd的样式
import 'antd/dist/antd.css'
//自定义样式
import './styles/index.scss'
//svg-icon
import 'virtual:svg-icons-register'
//设置全局方法
// import commonUtil from '@/utils/commonUtil.js'
// React.Component.prototype.$commonUtil = commonUtil
ReactDOM.render(<App />, document.getElementById('root'))
