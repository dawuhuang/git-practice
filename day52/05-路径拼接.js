const path = require('path')
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr);
const pathStr2 = path.join(__dirname, './04.txt')
console.log(pathStr2);