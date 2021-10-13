import { Modal } from 'antd'
export default {
  antConfirm(content) {
    return new Promise((resolve) => {
      Modal.confirm({
        title: '删除',
        content: content,
        okText: '是',
        okType: 'danger',
        cancelText: '否',
        onOk: () => {
          resolve('')
        },
        onCancel() {
          console.log('Cancel')
        }
      })
    })
  }
}
