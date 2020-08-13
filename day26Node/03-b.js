// b.js  在b.js模块中导入模块a
let a = require("./03-a.js");
// 输出a模块中version变量
console.log(a.version);
console.log(a.sayHi("wuhuang"));
