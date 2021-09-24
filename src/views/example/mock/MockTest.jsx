/* react redux */
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import axios from 'axios'
function MockTest(props) {
  const listReq = () => {
    axios.get('/getMapInfo').then((res) => {
      if (res.data) {
        console.log(res.data)
        alert(res.data.title)
      }
    })
  }
  // React.useEffect(() => {
  //   //类似于ComponentDidMount
  //   console.log('useEffect into')
  //   return (state) => {
  //     //类似于ComponentUnMount
  //     console.log('useEffectreturn')
  //   }
  // }, [])
  return (
    <Fragment>
      <div>mock 使用示例(dev环境时使用)</div>
      <Button onClick={listReq}>点击发送mock请求</Button>
    </Fragment>
  )
}

//配置使用redux
export default connect((state) => ({}))(MockTest)
