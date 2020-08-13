// 导入模块
const path = require('path')
const fs = require('fs')
let finiaPath = path.join('../readme.md')
console.log();
fs.readFile(finiaPath,'utf8',(err,doc) => {
    if (err != null) {
        console.log(err);
        return
    }
    console.log(doc);
})