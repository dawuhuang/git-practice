const template = require('art-template')
const path = require('path')
template.defaults.root = path.join(__dirname,'views')
const data = template('09.art',{
    msg:'我是模板基础'
})
console.log(data);