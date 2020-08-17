// 引入http模块
const http = require("http");
// 引入path模块
const path = require("path");
// 引入第三方模块template模板引擎
const template = require("art-template");
// 引入第三方模块serve-static实现静态资源访问
const serveStatic = require("serve-static");
// 引入第三方模块 dateformat 时间格式化
const dateFormat = require("dateformat");
const serce = serveStatic(path.join(__dirname, "public"));
// 向模板中导入变量
template.defaults.imports.dateFormat = dateFormat;
// 设置模板的根目录
template.defaults.root = path.join(__dirname, "views");
// 导入数据库连接
require("./model/contect");
const router = require("./route/index");
// 创建web服务器
const app = http.createServer();
// 发送请求和接收响应
app.on("request", (req, res) => {
    router(req, res, () => {});
    serce(req, res, () => {});
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
