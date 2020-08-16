 const template = require('art-template')
 const path = require('path')

 const url = path.join(__dirname,'views','02.art')
 let data = template(url, {
    name: 'zs',
    age: 15
 })
 console.log(data);