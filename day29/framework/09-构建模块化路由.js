const express = require('express')
const home = express.Router()
const app = express()
app.use('/home',home)
home.get('/index',(req,res) => {
    res.send('欢迎来的博客页面')
})
app.listen(3000)
console.log('服务器启动成功');