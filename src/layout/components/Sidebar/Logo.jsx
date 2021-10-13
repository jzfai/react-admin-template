/* react redux */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
/*引入本页样式*/
import './Logo.scss'
import settings from '@/settings'
function Logo(props) {
  let title = settings.title
  let logo = settings.logo
  const renderImageTitle = () => {
    if (props.opened) {
      return (
        <div className="sidebar-logo-link" key={'a'}>
          <img className="sidebar-logo" src={logo} />
          <h1 className="sidebar-title">{title}</h1>
        </div>
      )
    } else {
      return (
        <div className="sidebar-logo-link" key={'b'}>
          <img className="sidebar-logo" src={logo} />
        </div>
      )
    }
  }
  return (
    <div className={`sidebar-logo-container ${props.open && 'collapse'}`}>
      <SwitchTransition>
        <CSSTransition classNames="sidebar-fade" key={props.opened} timeout={100}>
          {renderImageTitle()}
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

//配置使用redux
export default connect((state) => ({
  opened: state.app.sidebar.opened
}))(Logo)
