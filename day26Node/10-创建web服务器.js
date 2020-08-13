// 引入系统模块
const http = require('http')
// 创建web服务器
const app = http.createServer()
// 发送请求
app.on('request',(req,res) => {
    res.end('<h1>hi node</h1>')
})
// 监听3000端口
app.listen(3000)

// 告诉启动成功
console.log('服务器启动成功');