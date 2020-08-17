const template = require('art-template')
const path = require('path')
template.defaults.root = path.join(__dirname,'views')
const data = template('10.art', {
    msg: '我是首页'
})
console.log(data);