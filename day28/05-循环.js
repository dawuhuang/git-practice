const template = require('art-template')
const path = require('path')

const url = path.join(__dirname,'views','03.art')
let data = template(url, {
    users: [{
        name: 'zs',
        age: 20,
        gender: '男'
    },{
        name: 'li',
        age: 14,
        gender: '女' 
    },{
        name: '王五',
        age: 88,
        gender: '男'
    }]
})
console.log(data);
