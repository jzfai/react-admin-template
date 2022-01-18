/* react redux */
// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import bus from '@/utils/eventBus'
import axiosReq from '@/utils/axiosReq.js'
import { connect } from 'react-redux'
import { Button, Form, Input, message, Space, Table, DatePicker } from 'antd'
import antUtils from '@/utils/antUtils'
const { RangePicker } = DatePicker

function ErrorLog() {
  const errlogTest = () => {
    throw new Error('error test')
  }

  /*删除*/
  let deleteByIdReq = (id) => {
    return axiosReq({
      url: '/integration-front/errorCollection/deleteById',
      data: { id: id },
      isParams: true,
      method: 'delete',
      bfLoading: true
    })
  }
  const tableDelClick = (row) => {
    antUtils.antConfirm(`您确定要删除${row.pageUrl}】？`).then(() => {
      deleteByIdReq(row.id).then(() => {
        selectPageReq()
        message.success(`【${row.pageUrl}】删除成功`).then()
      })
    })
  }
  const columns = [
    {
      title: '错误日志',
      dataIndex: 'errorLog',
      key: 'errorLog',
      align: 'center'
    },
    {
      title: '页面路径',
      dataIndex: 'pageUrl',
      key: 'pageUrl',
      width: 180,
      align: 'center'
    },
    {
      title: '版本号',
      dataIndex: 'version',
      key: 'version',
      width: 110,
      align: 'center'
    },
    {
      title: '浏览器类型',
      dataIndex: 'browserType',
      key: 'browserType',
      width: 180,
      align: 'center'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 150,
      align: 'center'
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      width: 120,
      render: (text, record) => (
        <Space size="middle" key={record}>
          <Button type="primary" size="small" onClick={() => tableDelClick(record)}>
            删除
          </Button>
        </Space>
      )
    }
  ]
  /*table相关*/
  const [tableData, setTableData] = React.useState([])
  const [rowIdArr, setRowIdArr] = React.useState([])
  const onSelectChange = (selectedRowKeys) => {
    setRowIdArr(selectedRowKeys)
  }
  const rowSelection = {
    type: 'checkbox',
    onChange: onSelectChange
  }
  const handleCurrentChange = (pageNum, pageSize) => {
    //console.log('pageNum, pageSize', pageNum, pageSize)
    setPageNum(pageNum)
    setPageSize(pageSize)
    //通过useEffect 更新数据
    // Promise.resolve()
    //   .then(() => {
    //   })
    //   .then(() => {
    //     //获取到设置后的值
    //     selectPageReq()
    //   })
  }
  const multiDelBtnClick = () => {
    if (rowIdArr.length === 0) {
      message.warning('表格选项不能为空').then()
      return
    }
    antUtils.antConfirm(`确认删除【${rowIdArr.join(',')}】吗?`).then(() => {
      axiosReq({
        url: `/integration-front/errorCollection/deleteBatchIds`,
        data: rowIdArr,
        method: 'DELETE',
        bfLoading: true
      }).then(() => {
        selectPageReq()
        message.success('删除成功').then()
      })
    })
  }
  /*分页相关*/
  const [pageSize, setPageSize] = React.useState(10)
  const [pageNum, setPageNum] = React.useState(1)
  const [pageTotal, setPageTotal] = React.useState([])
  //副作用更新数据
  useEffect(() => {
    selectPageReq()
  }, [pageSize, pageNum])
  // useEffect(() => {
  //   selectPageReq()
  // }, [pageNum])
  let selectPageReq = (values) => {
    const data = Object.assign(values ?? {}, {
      pageNum: pageNum,
      pageSize: pageSize
    })
    let reqConfig = {
      url: '/integration-front/errorCollection/selectPage',
      method: 'get',
      data,
      isParams: true,
      isAlertErrorMsg: false
    }
    axiosReq(reqConfig).then((resData) => {
      setTableData(resData.data?.records)
      setPageTotal(resData.data?.total)
    })
  }
  /*form表单相关*/
  const onFinish = (fieldsValue) => {
    const rangeValue = fieldsValue['range-picker']
    let values = JSON.parse(JSON.stringify(fieldsValue))
    if (rangeValue?.length) {
      values.startTime = rangeValue[0].format('YYYY-MM-DD HH:mm:ss')
      values.endTime = rangeValue[1].format('YYYY-MM-DD HH:mm:ss')
      delete values['range-picker']
    }
    selectPageReq(values)
  }
  React.useEffect(() => {
    //类似于ComponentDidMount
    selectPageReq()

    //监听页面报错然后触发更新
    bus.on('reloadErrorPage', () => {
      selectPageReq()
    })
    return () => {
      //类似于ComponentUnMount
      bus.removeListener('reloadErrorPage', () => {})
    }
  }, [])
  return (
    <div className="reset-table-height">
      <div className="mb-1 rowBS">
        <div>
          <Button type="primary" onClick={errlogTest}>
            error test
          </Button>
          <Button className="ml-1" type="primary" onClick={multiDelBtnClick}>
            删除
          </Button>
        </div>
        <Form layout="inline" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
          <div className="widthPx-300">
            <Form.Item
              name="range-picker"
              labelCol={{ offset: 0, span: 6 }}
              wrapperCol={{ offset: 0, span: 18 }}
              label="时间范围"
            >
              <RangePicker />
            </Form.Item>
          </div>
          <Form.Item label="错误日志" name="errorLog">
            <Input />
          </Form.Item>
          <Form.Item label="页面路径" name="pageUrl">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        scroll={{ x: 1100, y: '10vh' }}
        size="small"
        rowKey="id"
        rowSelection={rowSelection}
        pagination={{
          position: ['bottomCenter'],
          pageSize: pageSize,
          current: pageNum,
          total: pageTotal,
          onChange: (pageNum, pageSize) => {
            handleCurrentChange(pageNum, pageSize)
          }
        }}
        bordered
        columns={columns}
        dataSource={tableData}
      />
    </div>
  )
}

//配置使用redux
export default connect(() => ({}))(ErrorLog)
