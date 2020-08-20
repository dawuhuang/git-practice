// 引入express框架
const express =require('express')
// 引入路径处理模块
const path = require('path')
// 引入body-parser模块
const bodyParser = require('body-parser')
// 开启服务器
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

// 开启静态资源访问功能
app.use(express.static(path.join(__dirname,'public')))

// 01 ajax的初体验
app.get('/first',(req,res) =>{
    // 接受get方式发送过来的请求
    res.send('hello ajax')
})
app.get('/get',(req,res) => {
    res.send(req.query)
})

app.post('/post',(req,res) => {
    res.send(req.body)
})
// 监听端口
app.listen(3000)
// 告诉开发者服务器启动成功
console.log('服务器启动成功');