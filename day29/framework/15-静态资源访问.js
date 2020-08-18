const express = require('express')
const path = require('path')
const app = express()
app.use('/sex',express.static(path.join(__dirname,'students')))
app.listen(3000)
console.log('服务器启动成功');

