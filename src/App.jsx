// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import store from './store'
import Router from './router'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ConfigProvider>
  )
}
export default App
