// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express()
app.get('/',(req,res) => {
    res.send('hello express')
})
app.get('/list',(req,res) => {
    res.send({name: 'zs',age:20})
})
// 监听端口
app.listen(3000)
console.log('服务器启动成功');