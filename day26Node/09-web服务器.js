// 引用系统模块
const http = require('http')
// 创建web服务器
const app = http.createServer();

// 当客户端发生请求的时候
app.on('request', (req,res) => {
    // 响应
    res.end('<h1>hi.user</h1>')
})

// 监听3000端口
app.listen(3000)
console.log('服务器端口已经期待，监听3000端口，请访问localhost:3000');