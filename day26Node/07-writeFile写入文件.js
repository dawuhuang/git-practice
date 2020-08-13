const fs = require('fs')
fs.writeFile('./dome.txt', '过秦论', err => {
    if (err != null ) {
        console.log(err);
        return
    }
    console.log('写入成功');
})