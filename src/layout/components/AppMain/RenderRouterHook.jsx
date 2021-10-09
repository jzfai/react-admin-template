// eslint-disable-next-line no-use-before-define
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
/*其他引入*/
import { isExternal } from '@/utils/validate'
import path from 'path'
import asyncImport from './asyncImportComp'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { asyncRouters } from '@/router/config'

function RenderRouterHook() {
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
          <Route component={asyncImport(item.component)} exact key={item.path} path={resolvePath(uPath, item.path)} />
        )
      }
      if (item.redirect) routerArr.push(<Redirect exact={true} path={item.path} to={item.redirect} />)
    }
  }
  useEffect(() => {
    renderRouterFunc(asyncRouters, '/')
  }, [])
  return (
    <Fragment>
      {/*动画有点问题*/}
      <TransitionGroup>
        <CSSTransition classNames="fade-main" timeout={300}>
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
export default connect(() => ({}))(RenderRouterHook)
