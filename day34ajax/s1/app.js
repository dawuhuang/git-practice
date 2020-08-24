const express = require('express')
const request = require('request')

const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,'public')))
app.get('/server',(req,res) => {
    // err 错误对象  response 响应信息 body响应的主体内容
    request('http://localhost:3001/see',(err,response,body) => {
    // console.log(err);
    // console.log(response);
    // console.log(body);
    res.send(body)
    })
})

app.listen(3000)
console.log('s1服务器启动成功');