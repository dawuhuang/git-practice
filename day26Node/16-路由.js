const http = require('http')
const app = http.createServer()
const url = require('url')

app.on('request', (req,res) => {
    res.writeHead(200, {
        'Content-type':'text/html;charset=utf8'
    })
    let {pathname} = url.parse(req.url, true)
    if (pathname == '/index' || pathname == '/') {
        res.end('欢迎来的首页')
    }else if (pathname == '/list') {
        res.end('欢迎来的列表页')
    }else {
        res.end('没有找页面')
    }
})
app.listen(3000)
console.log('服务器启动成功');