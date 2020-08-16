// 导入模板引擎
const template = require('art-template')
const path = require('path')
const { model } = require('mongoose')
const  url = path.join(__dirname,'views','01.art')
let data = template(url, {
    name: 'zs',
    age: 20,
    content: '<h1>我是标题</h1>'
})
console.log(data);