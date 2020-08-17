const template = require("art-template");
const path = require("path");
const dataFormat = require("dateformat");

// 导入模板变量
template.defaults.imports.dataFormat = dataFormat;

// 设置模板的根目录
template.defaults.root = path.join(__dirname, "views");

// 设置默认的模板后缀
template.defaults.extname = '.html'
const data = template("06.art", {
    time: new Date(),
});
console.log(template('07',{}));
console.log(data);
