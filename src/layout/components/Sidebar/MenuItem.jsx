/*react redux router*/
import React, { Fragment, useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { asyncRouters } from '@/router/config'
import { Menu } from 'antd'
const { SubMenu } = Menu
import { MailOutlined, PieChartOutlined } from '@ant-design/icons'

import path from 'path'
import { isExternal } from '@/utils/validate'
function menuItem(props) {
    const [uState, setState] = useState({ count: 111 })
    const countNum = useSelector((state) => state.count.countNum)
    const dispatch = useDispatch()
    function testChangeState() {
        setState({
            ...uState,
            count: uState.count + 1000
        })
    }
    const testStore = () => {
        // console.log("修改了store", store.getState());
        dispatch({ type: 'R_countNum', data: countNum + 1000 })
        //store.dispatch({type: "R_countNum", data: countNum+1000})
        //this.props.A_countNum(30000);
    }
    /*侧边栏默认选中和展开*/
    let location = useLocation()
    //const [activeMenu, setActiveMenu] = useState('')
    let activeMenu = location.pathname
    let pathNameArr = location.pathname.substring(1).split('/')
    pathNameArr[0] = '/' + pathNameArr[0]

    //useEffect(() => {
    // new Promise((resolve) => {
    //   setActiveMenu(() => {
    //     resolve(location.pathname)
    //     return location.pathname
    //   })
    //   console.log('initPageMounted')
    // }).then((res) => {
    //   console.log('activeMenu', activeMenu)
    // })
    //}, [location])
    const resolvePath = (uPath, routePath) => {
        if (isExternal(routePath)) {
            return routePath
        }
        if (isExternal(uPath)) {
            return uPath
        }
        return path.resolve(uPath, routePath)
    }
    const showMenuItem = (children = [], parent) => {
        let onlyOneChild = null
        const showingChildren = children.filter((item) => {
            if (item.hidden) {
                return false
            } else {
                // Temp set(will be used if only has one showing child)
                onlyOneChild = item
                return true
            }
        })
        if (showingChildren.length === 1 && !parent?.alwaysShow) {
            return true
        }
        if (showingChildren.length === 0) {
            onlyOneChild = { ...parent, path: '', noChildren: true }
            return true
        }
        return false
    }
    const renderSideMenu = (asyncRouter, uPath) => {
        return asyncRouter
            .map((item) => {
                if (item.hidden) return ''
                if (showMenuItem(item.children, item)) {
                    return (
                        <Menu.Item icon={<PieChartOutlined />} key={resolvePath(uPath, item.path)}>
                            <Link to={resolvePath(uPath, item.path)}>
                                <span className="nav-text">{item.meta && item.meta.title}</span>
                            </Link>
                        </Menu.Item>
                    )
                } else {
                    return (
                        <SubMenu icon={<MailOutlined />} key={item.path} title={item.meta.title}>
                            {renderSideMenu(item.children, resolvePath(uPath, item.path))}
                        </SubMenu>
                    )
                }
            })
            .filter((fItem) => fItem)
    }

    return (
        <Menu
            defaultOpenKeys={pathNameArr}
            inlineCollapsed={!props.opened}
            inlineIndent="10"
            mode="inline"
            selectedKeys={[activeMenu]}
            theme="dark"
        >
            {renderSideMenu(asyncRouters, '/')}
        </Menu>
    )
}

//配置使用redux
export default connect((state) => ({
    opened: state.app.sidebar.opened
}))(menuItem)
