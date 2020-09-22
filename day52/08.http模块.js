const http = require('http')
const app = http.createServer()

app.on('request', (req, res) => {
    // console.log('http');
    // 为了解决中文乱码问题设置响应头
    res.setHeader('Content-type', 'text/plain;charset=utf-8')
    res.end('ok好了11')
})

app.listen(3000, () => {
    console.log('服务器启动成功');
})
