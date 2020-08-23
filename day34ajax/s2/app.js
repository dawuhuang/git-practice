const express = require('express')

const path = require('path')
const { json } = require('express')
const app = express()

app.use(express.static(path.join(__dirname,'public')))
app.use((req,res,next) => {
// 允许那些客户端访问我 *表示允许所以网站访问
res.header('Access-Control-Allow-Origin','*')
// 允许客户端使用哪些请求方法访问我
res.header('Access-Control-Allow-Methods','get,post')
        res.send('ok1')
    next()
})

app.get('/test',(req,res) => {
const result = 'fn({name:"zs"})'
res.send(result)
})

app.get('/better',(req,res) => {
    // // 接受客户端传递过来的函数名称
    // const fnName = req.query.callback
    // // 将函数名称对应的函数调用代码返回给客户端
    // const result = fnName + '({name:"zs",age:20})'
    // setTimeout(() => {
    //     res.send(result)
    // }, 1000);
    res.jsonp({name:'ww',age:288})
})
app.get('/cross',(req,res) => {
    // 允许那些客户端访问我
    res.header('Access-Control-Allow-Origin','*')
    // 允许客户端使用哪些请求方法访问我
    res.header('Access-Control-Allow-Methods','get,post')
    res.send('ok')
})
app.listen(3001)
console.log('s2服务器启动成功'); 