const express = require('express')
const route = express.Router()
route.get('/user',(req,res) => {
    res.send({name:'zs'})
})
route.get('/list',(req,res) => {
    res.send('list')
})
module.exports = route