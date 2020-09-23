// const express = require('express')
const router = express.Router()
router.get('/user/list',function(req,res){
    res.send('Get User List')
})
router.get('/user/add',function(req,res){
    res.send('Add new User')
})
module.exports = router
