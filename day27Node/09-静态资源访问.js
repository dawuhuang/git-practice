const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const mime = require('mime')
const app = http.createServer()

app.on('request', (req,res) => {
    let pathname = url.parse(req.url).pathname
    pathname = pathname == '/' ? '/default.html' : pathname
    let pathUrl = path.join(__dirname,'public',pathname)
    let type = mime.getType(pathUrl)
    fs.readFile(pathUrl,(err,doc) => {
        if (err != null) {
            res.writeHead(404, {
                'content-type': 'charset=utf8'
            })
            res.end(err)
            return
        }
        res.writeHead(200, {
            'content-type': type
        })
        res.end(doc)
    })
    // console.log(pathUrl);
    // res.end('ok')
})
app.listen(3000)
console.log('服务器启动成功');