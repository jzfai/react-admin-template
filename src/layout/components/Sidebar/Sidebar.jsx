/* react redux */
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Logo from '@/layout/components/Sidebar/Logo'
import MenuItem from '@/layout/components/Sidebar/MenuItem'
function Sidebar(props) {
  React.useEffect(() => {
    // console.log('Sidebar mount')
  }, [])
  return (
    <Fragment>
      {/*logo*/}
      <Logo />
      <MenuItem />
    </Fragment>
  )
}

//配置使用redux
export default connect((state) => ({}))(Sidebar)
