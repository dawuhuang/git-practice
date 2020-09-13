const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({extended: false}))
app.get('/data',(req,res) => {
    res.send('data')
})
app.get('/data1',(req,res) => {
    res.send('data1')
})
app.get('/data2',(req,res) => {
    res.send('data2')
})
app.get('/data2',(req,res) => {
    res.send('data2')
})
app.get('/a1',(req,res) => {
    res.send('a1')
})
app.get('/a2',(req,res) => {
    res.send('a2')
})
app.get('/a3',(req,res) => {
    res.send('a3')
})
app.get("/fdata",(req,res) => {
    res.send('Hello Fetch')
})
app.get("/books",(req,res) => {
    res.send('Hello Fetch' + req.query.id)
})
app.get("/books/:id",(req,res) => {
    res.send('Restful形式的url传递参数' + req.params.id)
})
app.delete("/books/:id",(req,res) => {
    res.send('Delete请求参数' + req.params.id)
})
app.post("/books",(req,res) => {
    res.send('post请求参数' + req.body.uname + '-----' + req.body.age)
})
app.get("/adata",(req,res) => {
    res.send('adata请求参数' )
})
app.get("/async1",(req,res) => {
    res.send('=3' )
})
app.get("/async2",(req,res) => {
    res.send(req.query)
})
app.listen(3000)
console.log('服务器启动成功');