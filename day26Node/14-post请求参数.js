const http = require('http')
// const url = require('url')
const app = http.createServer()
// 处理请求参数模块
const querystring = require('querystring')
app.on('request',(req,res) => {
    // post参数是通过事件的方法接受的
    // data
    let postParams = ''
    req.on('data', params => {
        postParams += params
    })
    req.on('end', ()=> {
       var str = JSON.stringify(querystring.parse(postParams))
       str = JSON.parse(str)
        console.log(str);
    })

    res.end('ok')
})
app.listen(3000)
console.log('服务器启动成功');