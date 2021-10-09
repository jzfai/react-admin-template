/* react redux */
// eslint-disable-next-line no-use-before-define
import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './SvgIcon.scss'
function SvgIcon(props) {
  const [iconName, setIconName] = useState(null)
  useEffect(() => {
    setIconName(`#icon-${props.iconClass}`)
  }, [])
  return (
    <Fragment>
      <svg aria-hidden="true" className="svg-icon">
        <use xlinkHref={iconName} />
      </svg>
    </Fragment>
  )
}
//配置使用redux
export default connect((state) => ({}))(SvgIcon)
