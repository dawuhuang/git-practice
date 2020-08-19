const express =require('express')
const app = express()

app.use((req,res,next) => {
    req.name = 'zs'
    next()
})
app.get('/',(req,res) => {
    res.send(req.name)
})

app.listen(3000)
console.log('服务器启动成功');