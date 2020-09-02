// 导入express模块
const express = require('express')
// 导入路径模块
const path = require('path')
const bodyPatser = require('body-parser')
// 创建服务器
const app = express()
// 开启静态资源访问
app.use(express.static(path.join(__dirname)))
// 处理参数
app.use(bodyPatser.json())
app.use(bodyPatser.urlencoded({extended: false}))
// 开启Cors跨域资源共享，允许所以的网站访问
app.use((req,res,next) => {
    // 允许所以网站访问
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','get,post,PUT,DELETE')
    res.header('Access-Control-Allow-Headers','X-Requested-With')
    res.header('Access-Control-Allow-Headers','Content-Type')
    res.header('Access-Control-Allow-Headers','mytoken')
    next()
})
app.get('/data',(req,res) => {
    res.send('data')
})
app.get('/data1',(req,res) => {
    res.send('data1')
})
app.get('/data2',(req,res) => {
    res.send('data2')
})
app.get('/a1',(req,res) => {
    setTimeout(() => {
        res.send('a1')
    }, 1000);
})
app.get('/a2',(req,res) => {
    setTimeout(() => {
        res.send('a2')
    }, 2000);
})
app.get('/a3',(req,res) => {
    setTimeout(() => {
        res.send('a3')
    }, 3000);
})

// fethch
app.get('/books',(req,res) => {
    res.send('传统形式的url地址:' + req.query.id)
})
app.get('/books/:id',(req,res) => {
    res.send('Res的url地址:' + req.params.id)
})
app.delete('/books/:id',(req,res) => {
    res.send('Res的url地址:' + req.params.id)
})
app.post('/books',(req,res) => {
    res.send('post请求'+ req.body.uname + '----' +req.body.age)
})
app.put('/books/:id',(req,res) => {
    res.send('put请求'+ req.body.uname + '----' +req.body.age)
})
app.get('/json',(req,res) => {
    res.json({
        uname: 'zs',
        age: 22
    })
})
app.get("/adata",(req,res) => {
    res.send('zs2222')
})

// axios传参
app.get('/axios',(req,res) => {
    res.send(req.query.id)
})
app.get('/axios/:id',(req,res) => {
    res.send(req.params.id)
})
app.delete('/axios',(req,res) => {
    res.send(req.query.id)
})
app.post('/axios',(req,res) => {
    res.send(req.body.uname+ '---' + req.body.age)
})
app.put('/axios/:id',(req,res) => {
    res.send(req.body.uname + '------' + req.body.age)
})

// 全局配置
app.get('/baseu',(req,res) =>{
    res.send('123')
})
// async和await 处理多个异步请求
app.get('/async',(req,res) => {
    res.send('hello')
})
app.get('/async1',(req,res) => {
    if (req.query.info == 'hello') {
        res.send('nihao')
    }else {
        res.send('333')
    }
    
})
// 监听3000端口
app.listen(3000,()=> {
    console.log('服务器启动成功');
})