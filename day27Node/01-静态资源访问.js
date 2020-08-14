const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const mime = require("mime");

const app = http.createServer();

app.on("request", (req, res) => {
    let pathname = url.parse(req.url).pathname;

    pathname = pathname == '/' ? '/default.html' : pathname;

    let pathUrl = path.join(__dirname, "public" + pathname);
    let type = mime.getType(pathUrl);
    console.log(pathUrl);
    fs.readFile(pathUrl, (err, doc) => {
        if (err != null) {
            res.writeHead(404, {
                "content-type": "text/html;charset=utf8",
            });
            console.log(err);
            res.end("文件读取失败");
            return;
        }
        res.writeHead(200, {
            "content-type": type,
        });
        res.end(doc);
    });
});
app.listen(3000);
console.log("服务器启动成功");
