const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname,'public')))
app.get('/jsonp',(req,res) => {
    var data = {name:'zs',age:22}
    res.send(`fn(${JSON.stringify(data)})`)
})
app.listen(3000,() => {
    console.log('服务器启动成功');
})
