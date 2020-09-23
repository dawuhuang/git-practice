const express = require('express')
// const qs = require('querystring')

const customBodyparser = require('./06-custom-body-parser')
const app = express()
app.use(customBodyparser)
// app.use((req,res,next) => {
//     let str = ''
//     req.on('data',(chunk) => {
//         str += chunk
//     })
//     req.on('end',() => {
//         const body = qs.parse(str)
//         // console.log(body);
//         req.body = body
//         next()
//     })
    
// })
app.post('/user',(req,res) => {
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('服务器启动成功http://localhost:3000');
})