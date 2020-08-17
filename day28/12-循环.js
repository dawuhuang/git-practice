const template = require('art-template')
const path = require('path')
template.defaults.root = path.join(__dirname,'views')
const data = template('11.art', {
    users: [{
        name: 'zs',
        age: 20,
        gender: '男'
    },{
        name: 'li',
        age: 30,
        gender: '男'
    },{
        name: 'ww',
        age: 55,
        gender: '女'
    }]
})
console.log(data);