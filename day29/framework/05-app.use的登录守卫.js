const express = require('express')

const app = express()
// 网站的维护公告
// app.use((req,res,next) => {
//     res.send('网站正在维护')
// })

// 登录守卫
app.use('/admin',(req,res,next) => {
    let flag = true
    if (flag) {
        // 登录成功，让请求继续向下执行
        next()
    }else {
        res.send('您还没有登录')
    }
})

app.get('/admin',(req,res) =>{
    res.send('访问登录成功的页面')
})

app.use((req,res,next) => {
    res.status(404).send('访问的页面没有找到')
})
app.listen(3000)
console.log('服务器启动成功');