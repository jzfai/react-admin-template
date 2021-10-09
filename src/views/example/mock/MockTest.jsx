// eslint-disable-next-line no-use-before-define
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, message } from 'antd'
import axios from 'axios'
function MockTest() {
  const listReq = () => {
    axios.get('/getMapInfo').then((res) => {
      if (res.data) {
        message.success(res.data?.title)
      }
    })
  }
  return (
    <Fragment>
      <div>mock 使用示例)</div>
      <Button onClick={listReq}>点击发送mock请求</Button>
    </Fragment>
  )
}

//配置使用redux
export default connect(() => ({}))(MockTest)
