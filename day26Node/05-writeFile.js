const fs = require('fs')
fs.writeFile('./dome.txt','即将要写入的内容',(err,doc) => {
    if (err != null) {
        console.log(err);
        return
    }
    console.log('文件写入成功\t');
})