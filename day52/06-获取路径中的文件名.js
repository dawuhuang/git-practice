const path = require('path')
const fpath = '/a/b/c/index.html'
console.log(path.basename(fpath));
console.log(path.basename(fpath,'.html'));