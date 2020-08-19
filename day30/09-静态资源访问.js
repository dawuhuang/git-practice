const express =require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname,'views')))
app.listen(3000)
console.log('服务器启动成功');