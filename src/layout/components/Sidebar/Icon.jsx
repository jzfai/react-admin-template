// eslint-disable-next-line no-use-before-define
import React, { Fragment } from 'react'
import SvgIcon from '@/icons/svg-icon'
import './Icon.less'
function Icon(props) {
  return (
    <div>
      {props.icon && (
        <div className="nav-icon">
          <SvgIcon iconClass={props.icon} />
        </div>
      )}
    </div>
  )
}

export default Icon
