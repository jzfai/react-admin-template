/* react redux */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { Breadcrumb } from 'antd'
import { useLocation, useParams, useRouteMatch } from 'react-router-dom'
function index(props) {
    //获取path
    let location = useLocation()
    let params = useParams()
    let routerMatch = useRouteMatch()
    const [activeMenu, setActiveMenu] = useState('')
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
