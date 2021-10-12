/* react redux */
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
function SvgIcon(props) {
  const [iconName, setIconName] = useState(null)
  useEffect(() => {
    setIconName(`#icon-${props.iconClass}`)
  }, [])
  return (
    <svg aria-hidden="true" className="svg-icon">
      <use xlinkHref={iconName} />
    </svg>
  )
}
//配置使用redux
export default connect(() => ({}))(SvgIcon)
