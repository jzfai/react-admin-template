// eslint-disable-next-line no-use-before-define
import React, { Fragment } from 'react'
import SvgIcon from '@/icons/svg-icon'
import './Icon.scss'
function Icon(props) {
  return (
    <Fragment>
      {props.icon && (
        <div className="nav-icon">
          <SvgIcon iconClass={props.icon} />
        </div>
      )}
    </Fragment>
  )
}

export default Icon
