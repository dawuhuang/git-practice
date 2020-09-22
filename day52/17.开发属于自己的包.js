const utils = require('./utils')
const dtStr = utils.dateFormat(new Date())
console.log(dtStr);
console.log('---------------------------------');
var htmlStr = utils.htmlEscape('<h1 title="abc">这是h1标签&nbsp;</h1>')
console.log(htmlStr);
console.log('----------------------------');
console.log(utils.htmlUnEscape(utils.htmlEscape('<h1 title="abc">这是h1标签&nbsp;</h1>')));