// eslint-disable-next-line no-use-before-define
import React from 'react'
import { connect } from 'react-redux'
import { Sidebar, Navbar, AppMain } from './components'
import './Layout.scss'
function Layout(props) {
  return (
    <div className={`${!props.opened && 'closeSidebar'}`}>
      {/* left container*/}
      <div className="sidebar-container">
        <Sidebar />
      </div>
      {/*right container*/}
      <div className="main-container">
        <Navbar />
        <AppMain />
      </div>
    </div>
  )
}
export default connect(
  (state) => ({
    opened: state.app.sidebar.opened
  }),
  {}
)(Layout)
