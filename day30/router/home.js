const express = require('express')
const home = express.Router()
home.get('/index',(req,res) => {
    res.send('我是home')
})
module.exports = home