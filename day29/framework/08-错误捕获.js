const express = require('express')
const fs = require('fs')
const app = express()
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)
app.get('/index', async (req,res,next) => {
    // 错误抛出
    // throw new Error('程序出现了未知错误')
    // res.send('ok')
    try {
        await readFile('./aaa.js')
    }catch(ex) {
        next(ex)
    }
})

app.use((err,req,res,netx) => {
    res.status(500).send(err.message)
})
app.listen(3000)
console.log('服务器启动成功');