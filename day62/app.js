const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname)))
app.get('/data',(req,res) => {
    res.send('ok')
})
app.get('/data1',(req,res) => {
    res.send('ok1')
})
app.listen(3000,() => {
    console.log('服务器启动成功');
})