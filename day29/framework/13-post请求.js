const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.post('/add',(req,res) => {
    res.send(req.body)
})
app.listen(3000)
console.log('服务器启动成功');