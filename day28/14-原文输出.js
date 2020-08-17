const template = require('art-template')
const path = require('path')
template.defaults.root = path.join(__dirname,'views')

const data = template('13.art',{
    msg: '<h1>我是标题</h1>'
})
console.log(data);