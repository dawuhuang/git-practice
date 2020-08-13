const http = require('http')
const app = http.createServer()

app.on('request',(req,res) => {
    // req.headers    // 获取请求报文
    // req.url        // 获取请求地址
    // console.log(req.url);    // 获取请求方法
    
    console.log(req.headers['accept']);

    if (req.url == '/index' || req.url == '/') {
        res.end('index')
    }else if (req.url == '/list') {
        res.end('list')
    }else {
        res.end('not found')
    }

    // if (req.method == 'POST'){
    //     res.end('post')
    // }else if (req.method == 'GET') {
    //     res.end('get')
    // }
})
// 监听3000端口
app.listen(3000)

// 告诉启动成功
console.log('服务器启动成功'); 