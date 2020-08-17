const template = require('art-template')
const path = require('path')

const url = path.join(__dirname,'views','04.art')
const data = template(url,{
    msg:'我是首页'
})
console.log(data);