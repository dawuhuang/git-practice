const express = require('express')
const app = express()

app.use('/idmin',(req,res,next) => {
    var flag = true
    
    if (flag) {
        next()
    }else {
        res.send('还未登录，禁止访问')
    }
})

app.get('/idmin',(req,res) => {
    res.send('登录成功，可以访问')
})
// 自定义404页面
app.use((req,res,next) => {
    res.status(404).send('访问的页面或者资源没有找到')
})
app.listen(3000)
console.log('服务器启动成功');