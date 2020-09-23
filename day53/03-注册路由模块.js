const express = require('express')
const app = express()
const userRouter = require('./router')

app.use('/api',userRouter)
app.listen(3000, () => {
    console.log('服务器启动成功http://localhost:3000');
})