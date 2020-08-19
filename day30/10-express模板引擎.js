const express = require('express')
const path = require('path')
const app = express()
// 告诉框架处理什么后缀的模板文件，使用什么模板引擎
app.engine('art', require('express-art-template'))
// 告诉框架处理模板文件的路径
app.set('views', path.join(__dirname,'views'))
// 设置默认后缀
app.set('view engine','art')
app.get('/index',(req,res) => {
    res.render('index',{
        msg: 'index'
    })
})
app.get('/list',(req,res) => {
    res.render('list',{
        msg: 'list'
    })
})

app.listen(3000)
console.log('服务器启动成功');