/* react redux */
import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
/*antd*/
import { Menu, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, MailOutlined } from '@ant-design/icons'
/*其他引入*/
import { isExternal } from '@/utils/validate'
import path from 'path'
import asyncImport from '../Navbar/asyncImportComp'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group'
import { asyncRouters } from '@/router/config'
function RenderRouterHook(props) {
    useEffect(() => {
        renderRouterFunc(asyncRouters, '/')
    }, [])

    const resolvePath = (uPath, routePath) => {
        if (isExternal(routePath)) {
            return routePath
        }
        if (isExternal(uPath)) {
            return uPath
        }
        return path.resolve(uPath, routePath)
    }
    let routerArr = []
    const renderRouterFunc = (asyncRouter, uPath) => {
        for (const item of asyncRouter) {
            if (item.hasOwnProperty('children')) {
                item.children.forEach((fItem) => {
                    routerArr.push(
                        <Route
                            component={asyncImport(fItem.component)}
                            exact
                            key={fItem.path}
                            path={resolvePath(item.path, fItem.path)}
                        />
                    )
                    if (fItem.hasOwnProperty('children')) {
                        renderRouterFunc(fItem.children, resolvePath(item.path, fItem.path))
                    }
                })
            } else {
                routerArr.push(
                    <Route
                        component={asyncImport(item.component)}
                        exact
                        key={item.path}
                        path={resolvePath(uPath, item.path)}
                    />
                )
            }
            if (item.redirect) routerArr.push(<Redirect exact={true} path={item.path} to={item.redirect} />)
        }
    }
    return (
        <Fragment>
            <TransitionGroup>
                <CSSTransition classNames="fade-main" timeout={200}>
                    <Switch>
                        {routerArr}
                        <Redirect exact={true} path="/" to="/dashboard" />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    )
}

//配置使用redux
export default connect((state) => ({
    countNum: state.count.countNum
}))(RenderRouterHook)
