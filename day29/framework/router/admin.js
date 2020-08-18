const express = require('express')
const admin = express.Router()
admin.get('/index',(req,res) => {
    res.send('admin页面的主页')
})
module.exports = admin