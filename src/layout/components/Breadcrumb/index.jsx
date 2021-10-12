/* react redux */
// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
function index() {
  //获取path
  let location = useLocation()
  let pathNameArr = location.pathname.substring(1).split('/')
  useEffect(() => {}, [location])

  return (
    <div className={'ml-1'}>
      <Breadcrumb>
        {pathNameArr.map((mItem) => {
          return (
            <Breadcrumb.Item key={mItem}>
              {mItem}
              {/*<a href="">{mItem}</a>*/}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
    </div>
  )
}

//配置使用redux
export default connect((state) => ({
  countNum: state.count.countNum
}))(index)
