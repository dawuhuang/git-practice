// a.js  在模块内部定义容量
let version = 1.0
const sayHi = name => `你好.${name}`
// 向模块外部导出数据
// exports.version = version
// exports.sayHi = sayHi

// 模块的导出
module.exports.version = version
module.exports.sayHi = sayHi