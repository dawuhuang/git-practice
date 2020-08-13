const http = require('http')
const app = http.createServer()

app.on('request',(req,res) => {
    // req.headers    // 获取请求报文
    // req.url        // 获取请求地址
    console.log(req.method);    // 获取请求方法
    if (req.method == 'POST'){
        res.end('post')
    }else if (req.method == 'GET') {
        res.end('get')
    }
    res.end('<h1>hi node</h1>')
})
// 监听3000端口
app.listen(3001)

// 告诉启动成功
console.log('服务器启动成功'); 