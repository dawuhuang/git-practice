const http = require('http')
const url = require('url')
const app = http.createServer()
app.on('request', (req,res) => {
    // url.parse(req.url)
    // 
    // console.log(url.parse(req.url,true).query);
    let {query,pathname} = url.parse(req.url,true);
    let str = JSON.stringify(query)
    str = JSON.parse(str)
    res.writeHead(200, {
        'Content-type':'text/html;charset=utf8'
    })
    console.log(str.name);
    console.log(str.age);
    if (pathname == '/index' || pathname == '/') {
        res.end('<h2>欢迎来到首页</h2>')
    }else if (pathname == '/list') {
        res.end('<h2>欢迎来的列表页</h2>')
    }else {
        res.end('<h2>页面没有找到</h2>')
    }

    res.end('<h1>欢迎来的首页</h1>')
})
app.listen(3000)
console.log('服务器期待成功'); 