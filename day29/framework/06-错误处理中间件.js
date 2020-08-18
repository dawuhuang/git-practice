const express = require('express')
const fs = require('fs')
const app = express()
app.get('/',(req,res,next) =>{
    // throw new Error('程序出现了未知错误')
    fs.readFile('./02.express框架.js',(err,doc) => {
        if (err) {
            next(err)
        }
    })
})

app.use((err,req,res,next) => {
    res.status(500).send(err.message)
})
app.listen(3000)
console.log('服务器启动成功');