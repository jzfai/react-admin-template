/* react redux */
// eslint-disable-next-line no-use-before-define
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Logo from '@/layout/components/Sidebar/Logo'
import MenuItem from '@/layout/components/Sidebar/MenuItem'
import settings from '@/settings'
function Sidebar() {
  return (
    <Fragment>
      {/*logo*/}
      {settings.sidebarLogo && <Logo />}
      <MenuItem />
    </Fragment>
  )
}

//配置使用redux
export default connect(() => ({}))(Sidebar)
