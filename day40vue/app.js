// 导入express模块
const express = require('express')
// 导入路径模块
const path = require('path')
// 创建服务器
const app = express()
// 开启静态资源访问
app.use(express.static(path.join(__dirname)))
// 开启Cors跨域资源共享，允许所以的网站访问
app.use((req,res,next) => {
    // 允许所以网站访问
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Mehtods','get,post')
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
// 监听3000端口
app.listen(3000,()=> {
    console.log('服务器启动成功');
})