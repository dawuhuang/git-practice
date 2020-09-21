// 导入文件系统模块
const fs = require('fs')
// 错误优先的回调函数
fs.writeFile('04.txt', 'hello node', function (err) {
    // console.log(err);
    if (err) {
        return console.log('文件写入失败！'+err.message)
    }
    console.log('文件写入成功');
})
setTimeout(() => {
    fs.readFile('./04.txt', 'utf8', function (err, dataStr) {
        // console.log(err);
        if (err) {
            return console.log('文件读取失败' + err.message)
        }
        console.log(dataStr);
    })
}, 1000);