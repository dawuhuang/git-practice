// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express()

// 接收所以的请求的中间件
app.use((req,res,next) => {
    console.log('请求走lapp.use中间件');
    next()
})
app.use('/request',(req,res,next) => {
    console.log('请求走lapp.use//request中间件');
    next()
})
app.get('/list',(req,res) => {
    res.send('list')
})

app.get('/request',(req,res,next) => {
    req.name = 'zs',
    next()
})

app.get('/request',(req,res) => {
    res.send(req.name)
})
app.listen(3000)
console.log('网站服务器启动成功');