const express = require('express')
const index = express.Router()
index.get('/index',(req,res) => {
    res.send('我是index')
})
module.exports = index