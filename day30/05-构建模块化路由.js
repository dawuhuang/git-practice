const express = require('express')
const app = express()
const index = require('./router/index')
const home = require('./router/home')
app.use('/index',index)
app.use('/home',home)
app.listen(3000)
console.log('服务器启动成功');
