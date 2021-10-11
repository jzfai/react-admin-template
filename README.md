#### 更新日志
```
2021-10-09 Optimization side menu 
```
### 前言
#### 本架构使用的技术为：react17+hooks+vite2 的新一代的react框架，框架使用类似 vue3-admin-template

```
框架有js和ts版本
js版本分支：https://github.com/jzfai/react-admin-template.git
ts版本分支：开发中
新一代的微服务架构：https://github.com/jzfai/micro-service-plus
```

> 开发和使用感受：两个字 真香！！！！！

### 效果

### 线上体验地址：http://8.135.1.141/react-admin-template
 ![http://8.135.1.141/file/images/wx-groud.png](http://8.135.1.141/file/images/1632649052939.png)
### 看下首次加载资源大小和速度
 ![http://8.135.1.141/file/images/wx-groud.png](http://8.135.1.141/file/images/1632649288128.png)
### 如何运行

```javascript

克隆项目
git clone https://github.com/jzfai/react-admin-template.git


进入项目目录
cd  react-admin-template

运行yarn安装依赖
yarn

运行dev命令
yarn run dev

补充：这里说下package.json里的scripts命令
"scripts": {
  "dev": "vite --mode serve-dev", ---- 开发时运行
   "build": "vite build --mode build",  ---- 打包发布生产环境
   "serve": "vite preview --mode build" ---- 这个是在你本地打包完后（yarn run build）后会生产一个dist文件夹，这个命令在你本地启动一个本地服务用于查看dist文件内容，发布生产前可以用这个先看下打包的效果
   "preview:build": "yarn run build && vite preview " --- 构建并查看（建议更新上product前运行一次,查看是否有问题）
},
```
#####

#### 如果需要实时交流的可以加入wx群(有vue3+ts视频教程)


 ![http://8.135.1.141/file/images/wx-groud.png](http://8.135.1.141/file/images/wx-groud.png)

大家的支持是我前进的动力    欢迎加入一起开发
