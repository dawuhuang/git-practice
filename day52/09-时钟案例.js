const fs = require('fs')
// css
const replaceCss = /<style>[\s\S]*<\/style>/
// js
const replaceJs = /<script>[\s\S]*<\/script>/
fs.readFile('index.html', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败' + err.message);
    }
    console.log('读取文件成功');
    resolveCss(dataStr)
    resolveJs(dataStr)
    resolveHtml(dataStr)
})
function resolveCss(data) {
    let r1 = replaceCss.exec(data)
    let newCss = r1[0].replace('<style>', '').replace('</style>', '')
    // console.log(newCss);
    // 写入
    fs.writeFile('./clock/index.css', newCss, function (err, dataStr) {
        if (err) {
            return console.log('文件写入失败' + err.message);
        }
        console.log('css写入成功');
    })
}
function resolveJs(data) {
    let r1 = replaceJs.exec(data)
    let newJs = r1[0].replace('<script>', '').replace('</script>', '')
    // 写入
    fs.writeFile('./clock/index.js', newJs, function (err, dataStr) {
        if (err) {
            return console.log('文件写入失败' + err.message);
        }
        console.log('js写入成功');
    })
}
function resolveHtml(data) {
    let newHtml = data
        .replace(replaceCss, '<link rel="stylesheet" href="./clock/index.css">')
        .replace(replaceJs, '<script src="./clock/index.js"></script>')
    // 写入
    fs.writeFile('./clock/index.html', newHtml, function (err, dataStr) {
        if (err) {
            return console.log('文件写入失败' + err.message);
        }
        console.log('HTML写入成功');
    })
}