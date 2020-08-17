const template = require('art-template')
const path = require('path')
const dateFormat = require('dateformat')
// 向模板导入变量
template.defaults.imports.dateFormat = dateFormat
// 设置模板根目录
template.defaults.root = path.join(__dirname,'views')

// 设置模板默认后缀
template.defaults.extname = '.art'

const data = template('08',{
    time: new Date()
})
console.log(data);