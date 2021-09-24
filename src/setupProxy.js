//js前端跨域配置
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        proxy('/api1', {
            target: 'http://localhost:5000',
            changeOrigin: true, //转发请求的真实地址
            pathRewrite: { '^/api1': '' }
        })
    )
}
