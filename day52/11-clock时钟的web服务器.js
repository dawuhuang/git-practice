const fs = require('fs')
const path = require('path')
const http = require('http')
const app = http.createServer()

app.on('request', (req, res) => {
    const url = req.url
    let fpath = ''
    if (url == '/') {
        fpath = path.join(__dirname,'/clock/index.html')
    }else {
        fpath = path.join(__dirname,'/clock',url)
    }
    fs.readFile(fpath,'utf8',function(err,dataStr){
        if (err) {
            return res.end('404')
        }
        res.end(dataStr)
    })
})

app.listen(3000, () => {
    console.log('服务器启动成功http://localhost:3000');
})