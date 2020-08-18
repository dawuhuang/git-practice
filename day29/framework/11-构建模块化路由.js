const express = require('express')
const app = express()
const home = require('./router/home')
const admin = require('./router/admin')
app.use('/home',home)
app.use('/admin',admin)
app.listen(3000)
console.log('服务器启动成功');