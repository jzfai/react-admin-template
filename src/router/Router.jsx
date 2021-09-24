import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { A_getUserInfo } from '@/store/actions/user'
import Layout from '@/layout'
import Login from '@/views/login'
function Router(props) {
    const { token, A_getUserInfo } = props
    let role = 'admin'
    return (
        <HashRouter>
            <Switch>
                <Route component={Login} exact path="/login" />
                <Route
                    path="/"
                    render={() => {
                        if (!token) {
                            return <Redirect to="/login" />
                        } else {
                            if (role) {
                                return <Layout />
                            } else {
                                A_getUserInfo(token).then(() => <Layout />)
                            }
                        }
                    }}
                />
            </Switch>
        </HashRouter>
    )
}

//配置使用redux
export default connect(
    (state) => ({
        ...state.user
    }),
    { A_getUserInfo }
)(Router)
