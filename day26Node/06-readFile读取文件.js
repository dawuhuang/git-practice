// 首先导入模块
const fs = require('fs')

fs.readFile('dome.txt','utf8',(err,doc) => {
    if (err != null) {
        console.log(err);
        return
    }
    console.log(doc);
})