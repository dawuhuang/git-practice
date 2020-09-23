const http = require('http')
const app = http.createServer()

app.on('request',(req,res) => {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('ok，服务器启动')
})
app.listen(3000,() => {
    console.log('服务器启动成功http://localhost:3000');
})