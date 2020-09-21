const fs = require('fs')
// const path = require('path')
fs.readFile(__dirname + '/成绩.txt','utf8',function(err,dataStr) {
    if (err) {
        return console.log('文件读取失败'+err.message)
    }
    console.log();
    var data = dataStr.replace(/=/g,':').split(' ').join("\n")
    console.log(data);
    fs.writeFile(__dirname + '/成绩.txt',data,function(err,dataStr) {
        if (err) {
            return console.log('文件写入失败'+err.message)
        }
        console.log('文件写入成功');
    })
})