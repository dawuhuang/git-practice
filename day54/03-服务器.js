const http = require('http')
const app = http.createServer()

app.on('request',(req,res) => {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    if (req.url === '/index.html') {
        res.end('<h1>欢迎来到首页</h1>')
    }else if(req.url === '/about.html') {
        res.end('欢迎来到个体中心页')
    }else {
        res.send('404')
    }
})
app.listen(3000,'192.168.69.139',function() {
    console.log('服务器启动成功');
})