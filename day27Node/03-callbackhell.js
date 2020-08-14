// 异步API的回调地狱问题
const fs = require("fs");

fs.readFile("a.txt", "utf8", (err, doc) => {
    if (null != null) {
        console.log(err);
        return;
    }
    console.log(doc);
    fs.readFile("b.txt", "utf8", (err, doc) => {
        if (null != null) {
            console.log(err);
            return;
        }
        console.log(doc);
        fs.readFile("./c.txt", "utf8", (err, doc) => {
            if (null != null) {
                console.log(err);
                return;
            }
            console.log(doc);
        });
    });
});
