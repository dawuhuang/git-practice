const template = require('art-template')
const path = require('path')
template.defaults.root = path.join(__dirname,'views')
const data = template('12.art',{
    age: 20
})
console.log(data);