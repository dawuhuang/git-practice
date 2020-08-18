const express = require('express')
const QueryString = require('qs')
const app = express()
QueryString
app.get('/',(req,res) => {
    res.send(req.query)
})
app.listen(3000)
console.log('服务器启动成功');
