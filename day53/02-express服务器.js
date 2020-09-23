const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // res.send('aaa哈哈')
    res.send({
        uname:'zs',
        age:20
    })
})
app.get('/user/:id', (req, res) => {
    // res.send('aaa哈哈')
    res.send(req.params)
})
app.listen(3000, () => {
    console.log('服务器启动成功http://localhost:3000');
})