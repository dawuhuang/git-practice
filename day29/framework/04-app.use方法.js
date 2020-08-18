const express = require('express')
const app = express()

// 中间件
app.use((req,res,next) => {
    console.log('中间件处理了');
    next()
})
app.use('/list',(req,res,next) => {
    console.log('list启动');
    next()
})

app.get('/',(req,res) => {
    res.send('ok')
})
app.listen(3000)
console.log('服务器启动成功');