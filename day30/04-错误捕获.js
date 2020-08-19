const express =require('express')
const app = express()
const fs = require('fs')
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)

// 读取某个文件，进行错误处理。
app.get('/index',async (req,res,next) => {
    try {
        // 读取一个存在的文件
        await readFile('./aaa.js')
    }catch(ex) {
        next(ex)
    }
// 使用错误处理中间件来处理错误
app.use((err,req,res,next) =>{
    res.status(500).send(err.message)
})
})
app.listen(3000)
console.log('服务器启动成功');