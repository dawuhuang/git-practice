const express = require('express')
const Router = express.Router()

Router.get('/getbook',(req,res) => {
    res.send('get请求')
})
Router.post('/addbook',(req,res) => {
    res.send('post请求')
})
module.exports = Router