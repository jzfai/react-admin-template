/* react redux */
import React from 'react'
import { connect } from 'react-redux'
import './Hanburger.scss'
function Hamburger(props) {
  const toggleClick = () => {
    props.toggleSideBar()
  }
  return (
    <div className="pl-1" onClick={toggleClick}>
      <svg
        className={`hamburger ${props.opened && 'is-active'}`}
        height="64"
        viewBox="0 0 1024 1024"
        width="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
      </svg>
    </div>
  )
}

//配置使用redux
export default connect(
  (state) => ({
    opened: state.app.sidebar.opened
  }),
  {}
)(Hamburger)
