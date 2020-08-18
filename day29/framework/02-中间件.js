// 引入express框架
const express = require('express')
// 创建web服务器
const app = express()

app.get('/request',(req,res,next) => {
    req.name = 'zs',
    next()
})
app.get('/request',(req,res) => {
    res.send(req.name)
})
app.listen(3000)
console.log('服务器启动成功');
