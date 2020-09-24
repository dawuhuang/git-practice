const fs = require('fs');
for (var i = 0; i < 6; i++) {
    fs.appendFile('成绩.txt', 'aaa\t 12\n', function (err, dataStr) {
        if (err) {
            console.log('写入失败');
        }
    })
}
setTimeout(() => {
    fs.readFile('成绩.txt', 'utf8', function (err, dataStr) {
        if (err) {
            console.log('读取失败');
        }
        console.log(dataStr);
    })
}, 2000);
