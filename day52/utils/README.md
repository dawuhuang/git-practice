## 安装
```
npm install utils
```

## 导入
```js
const utils = require('utils') 
```
## 功能
### 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = utils.dateFormat(new Date())
// 2020-09-22  14:43:08
console.log(dtStr);
```

### 转义HTML中的特殊字符
```js
// 调用 htmlEscape 对HTML中的特殊字符进行转义
const htmlStr = '<h1 title="abc">这是h1标签&nbsp;</h1>'
// 调用htmlEscape方法进行转换
var str = utils.htmlEscape(htmlStr)
// 转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&amp;nbsp;&lt;/h1&gt;
console.log(str);
```

### 还原HTML中的特殊字符
```js
// 调用 htmlUnEscap 对HTML中的特殊字符进行还原
const htmlStr2 = '&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&amp;nbsp;&lt;/h1&gt;'
// 调用 htmlUnEscape 方法进行转换
var str2 = utils.htmlUnEscape(htmlStr2)
// <h1 title="abc">这是h1标签&nbsp;</h1>
console.log(str2);
```

## 协议
ISC