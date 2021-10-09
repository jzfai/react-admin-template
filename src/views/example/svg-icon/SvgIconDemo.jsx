/* react redux */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { connect } from 'react-redux'
import SvgIcon from '@/icons/svg-icon'
import './SvgIconDemo.less'
function SvgIconDemo() {
  return (
    <div id="SvgIconDemo">
      <div className="mb-2">svg-icon 使用示例</div>
      <SvgIcon className="svg-icon" iconClass="table" />
    </div>
  )
}
//配置使用redux
export default connect(() => ({}))(SvgIconDemo)
