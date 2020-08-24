const express = require('express')
const path = require('path')
// 引入第三方模块body-parser
const bodyParser = require('body-parser')
// 引入数据库模块
const mongoose = require('mongoose')
const app = express()

// 开启静态资源访问
app.use(express.static(path.join(__dirname,'public')))

// 解析post 请求参数
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect('mongodb://localhost/todo',{useNewUrlParser: true })
.then(() => console.log('数据库连接成功'))
.catch(err => console.log('数据库连接失败',err))
// 解析json格式
// app.use(bodyParser.json())
// 01
app.get('/base',(req,res) => {
    res.send({
        name: 'zhangsan',
        age: 20
    })
})
app.post('/base',(req,res) =>{
    res.status(400).send({
        name:'wangwu',
        age: 44
    })
})

//02
app.get('/user',(req,res) => {
    res.send(req.query)
})
app.post('/user',(req,res) => {
    res.send(req.body)
})
// 03
app.post('/form',(req,res) => {
    res.send(req.body)
})
// 04
app.get('/jsonp',(req,res) => {
    var cb = req.query.cb
    var data = cb + '({name:"zs",age:20})'
    res.send(data)
    // res.jsonp({
    //     name:'zs',
    //     age:999
    // })
    res.header('content-type','text/xml')
})
app.listen(3000)
console.log('服务器启动成功');