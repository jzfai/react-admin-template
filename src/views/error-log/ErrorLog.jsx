/* react redux */
// eslint-disable-next-line no-use-before-define
import React, { Fragment } from 'react'
import bus from '@/utils/eventBus'
import axiosReq from '@/utils/axiosReq.js'
import { connect } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'
import { Button, message, Popconfirm, Space, Table, Tag } from 'antd'
function ErrorLog(props) {
  // const [uState, setState] = React.useState({ count: 111 })
  //redux相关
  // const countNum = useSelector((state) => state.count.countNum)
  // const dispatch = useDispatch()
  // function testChangeState() {
  //   setState({
  //     ...uState,
  //     count: uState.count + 1000
  //   })
  // }

  const errlogTest = () => {
    throw new Error('error test')
  }

  /*删除*/
  let deleteByIdReq = (id) => {
    return axiosReq({
      url: '/ty-user/errorCollection/deleteById',
      data: { id: id },
      isParams: true,
      method: 'delete',
      bfLoading: true
    })
  }
  const tableDelClick = (row) => {
    deleteByIdReq(row.id).then(() => {
      selectPageReq()
      message.success(`【${row.pageUrl}】删除成功`).then()
    })
  }
  const columns = [
    {
      title: '错误日志',
      dataIndex: 'errorLog',
      key: 'errorLog'
    },
    {
      title: '页面路径',
      dataIndex: 'pageUrl',
      key: 'pageUrl'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle" key={record}>
          <Button type="primary" size="small" onClick={() => tableDelClick(record)}>
            删除
          </Button>
        </Space>
      )
    }
  ]
  const [tableData, setTableData] = React.useState([])

  React.useEffect(() => {
    //类似于ComponentDidMount
    selectPageReq()
    //监听页面报错然后触发更新
    bus.on('reloadErrorPage', () => {
      selectPageReq()
    })
    return (state) => {
      //类似于ComponentUnMount
      console.log('useEffectreturn')
    }
  }, [])
  let selectPageReq = () => {
    let reqConfig = {
      url: '/ty-user/errorCollection/selectPage',
      method: 'get',
      isParams: true,
      isAlertErrorMsg: false
    }
    axiosReq(reqConfig).then((resData) => {
      setTableData(resData.data?.records)
    })
  }
  const [rowIdArr, setRowIdArr] = React.useState([])
  const tableOnChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra)
  }
  const onSelectChange = (selectedRowKeys) => {
    setRowIdArr(selectedRowKeys)
  }
  const rowSelection = {
    type: 'checkbox',
    onChange: onSelectChange
  }
  const multiDelBtnClick = () => {
    if (rowIdArr.length === 0) {
      message.warning('表格选项不能为空', 'warning').then()
      return
    }
    Popconfirm({ title: '确认' })
    axiosReq({
      url: `/ty-user/errorCollection/deleteBatchIds`,
      data: rowIdArr,
      method: 'DELETE',
      bfLoading: true
    }).then(() => {
      selectPageReq()
      message.success('删除成功').then()
    })
  }
  return (
    <Fragment>
      <div className="mb-1">
        <Button type="primary" onClick={errlogTest}>
          error test
        </Button>
        <Button className="ml-1" type="primary" onClick={multiDelBtnClick}>
          删除
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        bordered
        columns={columns}
        dataSource={tableData}
        rowKey="id"
        onChange={(pagination, filters, sorter, extra) => {
          tableOnChange(pagination, filters, sorter, extra)
        }}
      />
    </Fragment>
  )
}

//配置使用redux
export default connect((state) => ({
  countNum: state.count.countNum
}))(ErrorLog)
