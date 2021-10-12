import Modal from 'antd/es/modal/Modal'
export default {
  antConfirm(content) {
    //prod has error
    return new Promise((resolve) => {
      Modal.confirm({
        title: '删除',
        content: content,
        okText: '是',
        okType: 'warning',
        cancelText: '否',
        onOk: () => {
          resolve()
        },
        onCancel() {
          console.log('Cancel')
        }
      })
    })
  }
}
