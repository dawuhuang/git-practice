const http = require('http')
const app = http.createServer()
const quertstring = require('querystring')

app.on('request', (req,res) => {
    let postParams = ''
    // 因为post参数可能多次传递 data 和 end
    req.on('data', params => {
        postParams += params
    })
    res.end('ok', () => {
        // quertstring.parse 将post参数转换为对象形式
        let str = JSON.stringify(quertstring.parse(postParams))
        str = JSON.parse(str)
        console.log(str);
    })
    res.end('ok')
})
app.listen(3000)
console.log('服务器期待成功');