const express = require("express");

const app = express();

app.get('/admin',(req,res) => {
    res.send(req.query)
})
app.listen(3000);
console.log("服务器已经启动成功");
