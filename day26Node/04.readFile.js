// 1， 通过模块的名字fs对模块进行引用
const fs = require('fs')

// 模块模块内部的readFile读取文件内容
fs.readFile('01.Node基础.js','utf8', (err,doc) =>{
    console.log(err);
    console.log(doc);
    // if (err = null) {
    //     return doc
    // }
})