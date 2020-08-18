const express = require('express')
const home = express.Router()
home.get('/index',(req,res) => {
    res.send('home页面的主页')
})
module.exports = home