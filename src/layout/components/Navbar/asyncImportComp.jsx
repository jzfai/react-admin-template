// asyncImportComp.js
import React, { useState, useEffect } from 'react'

const asyncImportComponent = function (importComp) {
  function AsyncComponent(props) {
    const [Comp, setComp] = useState(null)
    useEffect(() => {
      async function fetchComponent() {
        try {
          const { default: importComponent } = await importComp()
          setComp(() => importComponent)
        } catch (e) {
          throw new Error('加载组件出错')
        }
      }
      fetchComponent()
    }, [])
    return Comp ? <Comp {...props} /> : <div>加载中...</div>
  }
  return AsyncComponent
}

export default asyncImportComponent
