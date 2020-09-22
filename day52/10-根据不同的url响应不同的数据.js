const http = require('http')

const app = http.createServer()
app.on('request',function(req,res) {
    const url = req.url
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    // res.setHeader('Content-type', 'text/plain;charset=utf-8')
    if (url == '/') {
        res.end('404 Not found')
    }else if (url == '/index.html') {
        res.end('<h1>首页</h1>')
    }else if (url == '/about.html') {
        res.end('关于页面')
    }
    // console.log(url);
    res.end('ok')
})
app.listen(3000, () => {
    console.log('服务器启动成功');
})