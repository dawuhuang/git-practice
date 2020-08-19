const express = require("express");
const path = require("path");
const app = express();

// 告诉express框架使用声明模板引擎
app.engine("art", require("express-art-template"));
// 告诉express框架模板存放位置
app.set("views", path.join(__dirname, "views"));
// 告诉express框架模板引擎的默认后缀是声明
app.set("view engine", "art");

app.get("/index", (req, res) => {
    res.render("index", {
        msg: "message",
    });
});
app.get("/list", (req, res) => {
    res.render("list", {
        msg: "list",
    });
});
app.locals.user= [{
    name:'zs',
    age:20
},{
    name: 'li',
    age:13
}]
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
