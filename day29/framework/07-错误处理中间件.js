const express = require('express')
const fs = require('fs')
const app = express()

app.get('/',(req,res,next) => {
    // 错误抛出
    // throw new Error('程序出现了未知错误')
    // res.send('ok')
    fs.readFile('./01.express框架.js','utf8',(err,doc) => {
        if (err) {
            next(err)
        }else {
            res.send(doc)
        }
    })
})

app.use((err,req,res,netx) => {
    res.status(500).send(err.message)
})
app.listen(3000)
console.log('服务器启动成功');