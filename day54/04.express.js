const express = require("express")

const app = express()

app.get('/book',(req,res) => {
    res.send('ok')
})
app.post('/api/delbook/:id',(req,res) => {
     console.log(req.params);
     console.log(req.query);
     res.send('ok')
})
app.listen(3000,() => {
    console.log('服务器启动成功');
})