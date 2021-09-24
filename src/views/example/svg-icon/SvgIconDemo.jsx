/* react redux */
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import SvgIcon from '@/icons/svg-icon'
import './SvgIconDemo.scss'
function SvgIconDemo(props) {
    // const [uState, setState] = React.useState({ count: 111 })
    // //redux相关
    // const countNum = useSelector((state) => state.count.countNum)
    // const dispatch = useDispatch()
    // function testChangeState() {
    //   setState({
    //     ...uState,
    //     count: uState.count + 1000
    //   })
    // }
    // const testStore = () => {
    //   // console.log("修改了store", store.getState());
    //   //dispatch({type: "R_countNum", data: countNum+1000})
    //   //store.dispatch({type: "R_countNum", data: countNum+1000})
    //   //this.props.A_countNum(30000);
    // }
    //
    // React.useEffect(() => {
    //   //类似于ComponentDidMount
    //   console.log('useEffect into')
    //   return (state) => {
    //     //类似于ComponentUnMount
    //     console.log('useEffectreturn')
    //   }
    // }, [])
    return (
        <Fragment>
            <div>svg-icon 使用示例</div>
            <SvgIcon className="svg-icon" iconClass="assign" />
        </Fragment>
    )
}

//配置使用redux
export default connect((state) => ({}))(SvgIconDemo)
