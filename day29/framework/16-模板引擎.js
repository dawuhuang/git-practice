// engine 是作用是告诉expess框架使用的是什么模板引擎
const express = require('express')
const path = require('path')
const app = express()

// 1，engine 告诉exress框架使用什么模板引擎渲染什么后缀的模板文件 参数1是模板后缀 参数2是使用的模板引擎
app.engine('art',require('express-art-template'))
// 2，告诉express框架模板存放的位置是什么 参数一是默认值，参数二是绝对路径
app.set('views',path.join(__dirname,'views'))
// 3，告诉express框架模板引擎的默认后缀是什么
app.set('view engine','art')
app.get('/index',(req,res) => {
    // render 的作用 拼接模板路径 拼接模板后缀 哪一个模板和哪一个数据进行拼接 将拼接结果响应给客户端
    res.render('index',{
        msg: 'message'
    })
})
app.get('/list',(req,res) => {
    res.render('list',{
        msg: 'list'
    })
})
app.listen(3000)
console.log('服务器启动成功');