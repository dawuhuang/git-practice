const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))
app.get('/jsonp',(req,res) => {

    // 获取前端传递过来的成功回调函数的名字
    var fn = req.query.callback
    var data = {name:'zs',age:22}
    res.send(`${fn}(${JSON.stringify(data)})`)
})
app.get('/cors',(req,res) => {
    res.send('ok')
})
app.listen(3000,() => {
    console.log('服务器启动成功');
})
