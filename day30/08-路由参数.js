const express = require('express')
const app = express()

app.get('/find/:id',(req,res) => {
    res.send(req.params)
})

app.listen(3000)
console.log('服务器启动成功');