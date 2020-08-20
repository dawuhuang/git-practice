const express = require('express')
const path = require('path')
const app = express()

// 开启静态资源访问功能
app.use(express.static(path.join(__dirname,'public')))

// 验证邮箱地址的唯一性
app.get('/verifyEmailAdress',(req,res) => {
    const email = req.query.email
    if (email == '10086@qq.com') {
        res.status(400).send({msg:'邮箱地址已经注册过，请跟换其他邮箱地址'})
    }else {
        res.send({msg: '邮箱地址可用'})
    }
})
app.listen(3000)
console.log('服务器器启动成功');