const path = require('path')
const fpath = '/a/b/c/index.html'
var ex = path.extname(fpath)
console.log(path.extname(fpath));
console.log(path.basename(fpath,ex));