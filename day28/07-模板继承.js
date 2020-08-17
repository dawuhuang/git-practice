const template = require('art-template')
const path = require('path')

const url = path.join(__dirname,'views','05.art')
const data = template(url,{
    msg:'我是首页模板'
})
console.log(data);