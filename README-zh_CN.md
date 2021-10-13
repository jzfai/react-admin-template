# react-admin-template

**中文** | [English](./README.md)



> 这是一个基础的 react admin 管理后台。


本架构使用的技术为：react17+vite2+ant4 新一代的前端框架，It's fast!

使用 eslint+prettier+gitHooks 格式和校验代码,提高代码规范性和开发效率

## 更新日志

```javascript
//10-08
add error log collection func
```


## 线上体验

[github address](https://github.com/jzfai/react-admin-template.git)

[Access address](http://8.135.1.141/react-admin-template)

github 地址：  https://github.com/jzfai/react-admin-template.git

国内体验地址：http://8.135.1.141/react-admin-template


## 例子

 ---- 我们先看看加载速度和构建后的包大小：

![template-speed-analysis](http://8.135.1.141/file/images/react-template-speed-analysis.png)

![template-demo](http://8.135.1.141/file/images/react-template-demo.png)

## 相关项目

框架有js，ts和plus版本

框架有js，ts和plus版本

- react js版本： [react-admin-template](https://github.com/jzfai/react-admin-template.git)
- react ts版本： [react-admin-ts](https://github.com/jzfai/react-admin-ts.git)
- vue3 js版本：[vue3-element-admin](https://github.com/jzfai/vue3-admin-template.git)
- vue3 ts版本：[vue3-element-ts](https://github.com/jzfai/vue3-admin-ts.git)
- vue3 plus版本：[vue3-element-plus](https://github.com/jzfai/vue3-admin-plus.git)
- java微服务后台数据：[micro-service-plus](https://github.com/jzfai/micro-service-plus)
> 开发和使用感受：两个字 真香！！！！！


## 文档
-- 文档努力开发中。。。。

可以先参考(和vue-admin-template使用类似)：[vue-admin-template使用文档](https://juejin.im/post/59097cd7a22b9d0065fb61d2)


#### 和 传统react admin区别

1.路由配置简单，一次配置即可完成路由生成和页面渲染

2.采用 react hooks ,写法更加灵活，简单，更易维护和迁移

3.使用vite2代替webpack 配置更加简单，打包和运行速度更快


[vite2和webpack打包速度上的对比](https://github.com/jzfai/react-admin-template/issues/2)

## 构建步骤

```bash
# 克隆项目
git clone https://github.com/jzfai/react-admin-template.git

# 进入项目目录
cd  react-admin-template

# 安装依赖(建议用yarn)
yarn

# 启动服务
yarn run dev
```

浏览器访问 http://localhost:5005


## 发布

```bash
# 构建测试环境
yarn run build-serve

# 构建生产环境
yarn run build
```

## 其它

```bash
# 预览发布环境效果
yarn run preview:build-serve

# 预览生产环境
yarn run preview

# 代码格式检查并自动修复
yarn run lint
```

## 功能

```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布
  - serve
  - build
  - priview
  - lint

- 全局功能
  #- 国际化多语言
  #- 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  #- Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  #- 富文本
  #- Markdown
  #- JSON 等多格式

#- Excel
  #- 导出excel
  #- 导入excel
  #- 前端可视化excel
  #- 导出zip

- 表格
  #- 动态表格
  #- 拖拽表格
  #- 内联编辑

- 错误页面
  #- 401
  #- 404

- 組件
  - 头像上传
  - 返回顶部
  #- 拖拽Dialog
  #- 拖拽Select
  #- 拖拽看板
  #- 列表拖拽
  #- SplitPane
  #- Dropzone
  #- Sticky
  #- CountTo

- 综合实例
- 错误日志
- Dashboard
#- 引导页
- ECharts 图表
#- Clipboard(剪贴复制)
#- Markdown2html
```

>注：#---暂未实现(希望大家能一起开发)

## 额外

架构开发不易，如果感觉好，请给我点个赞憋，架构还在不断完善中，欢迎加入我开发，一起成为Contributors ！！！！

## 浏览器支持


Modern browsers and Internet Explorer 11+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
|Edge| last 2 versions| last 2 versions| last 2 versions

## 讨论和交流(含react17+ts视频教程)
[WeChat group](http://8.135.1.141/file/images/wx-groud.png)

## 版本

[MIT](https://github.com/jzfai/react-admin-template/blob/master/LICENSE) license.

Copyright (c) 2021-present  kuanghua



