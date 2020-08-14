// 加载模块
const http = require('http')
const url = require('url')
const path = require('path')
const mime = require('mime')
const fs = require('fs')
// 启动web服务器
const app = http.createServer()

app.on('request', (req,res) => {
    let pathname = url.parse(req.url).pathname
    pathname = pathname == '/' ? '/default.html' : pathname
    let PathUrl = path.join(__dirname,'public',pathname)
    // console.log(PathUrl);
    let type = mime.getType(PathUrl)
    fs.readFile(PathUrl, (err,doc) => {
        if (err != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('文件没有找到')
            return
        }
        res.writeHead(200, {
            'content-type': type
        })
        res.end(doc)
    })
    // res.end('ok')
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');
