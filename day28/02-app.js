const mongoose = require("mongoose");
const http = require("http");
const url = require("url");
const querystring = require("querystring");
const { read } = require("fs");
const app = http.createServer();
// 连接数据库
mongoose
    .connect("mongodb://localhost/playground", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("数据库连接成功"))
    .catch((err) => console.log("数据库连接失败", err));

// 创建数据库规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 6,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        maxlength: 16,
        minlength: 2,
    },
    age: {
        type: Number,
        required: true,
        max: 100,
        min: 10,
    },
    hobbies: {
        type: [String],
        enum: ["足球", "篮球", "橄榄球", "敲代码", "抽烟", "喝酒", "烫头"],
    },
});

// 根据规则创建集合
const User = mongoose.model("User", userSchema);

app.on("request", async (req, res) => {
    // 获取url
    let { pathname, query } = url.parse(req.url, true);
    let user = await User.find();
    if (req.method == "GET") {
        // console.log(pathname);
        if (pathname == "/list" || pathname == "/") {
            let list = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            
            <body>
                <div class="container">
                    <h6>
                        <a href="/add" class="btn btn-primary">添加用户</a>
                    </h6>
            
                    <table class="table table-striped table-bordered">
                    <tr>
                <td>用户名</td>
                <td>年龄</td>
                <td>爱好</td>
                <td>邮箱</td>
                <td>操作</td>
            </tr>`;
            user.forEach(function (item) {
                let hobbies = "";
                item.hobbies.forEach(function (item) {
                    hobbies += `<span>${item}</span> `;
                });
                list += `
            <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>
                ${hobbies}
                </td>
                <td>${item.email}</td>
                <td>
                    <a href="/remove?id=${item.id}" class="btn btn-danger btn-xs">删除</a>
                    <a href="/modify?id=${item.id}" class="btn btn-success btn-xs">修改</a>
                </td>
            </tr>`;
            });
            list += `
                    </table>
                    </div>
                    </body>
                    </html>`;
            res.end(list);
        } else if (pathname == "/add") {
            let add = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>添加用户</h3>
                    <form method='post' action='/add'>
                      <div class="form-group">
                        <label>用户名</label>
                        <input type="text" class="form-control" placeholder="请填写用户名" name='name'>
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input type="password" class="form-control" placeholder="请输入密码" name='password'>
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input type="text" class="form-control" placeholder="请填写年龄" name='age'>
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input type="email" class="form-control" placeholder="请填写邮箱" name='email'>
                      </div>
                      <div class="form-group">
                        <label>请选择爱好</label>
                        <div>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="足球" name='hobbies'> 足球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="篮球" name='hobbies'> 篮球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="橄榄球" name='hobbies'> 橄榄球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="敲代码" name='hobbies'> 敲代码
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="抽烟" name='hobbies'> 抽烟
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="喝酒" name='hobbies'> 喝酒
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="烫头" name='hobbies'> 烫头
                            </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">添加用户</button>
                    </form>
                </div>
            </body>
            </html>`;
            res.end(add);
        } else if (pathname == "/modify") {
            // console.log(query.id);
            // 根据id查询数据
            let usermod = await User.findOne({ _id: query.id });
            // console.log(usermod);
            let modify = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>添加用户</h3>
                    <form method='post' action='/modify?id=${id=usermod._id}'>
                      <div class="form-group">
                        <label>用户名</label>
                        <input type="text" class="form-control" placeholder="请填写用户名" value='${usermod.name}' name='name'>
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input type="password" class="form-control" placeholder="请输入密码" value='${usermod.password}' name='password'>
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input type="text" class="form-control" placeholder="请填写邮箱" value='${usermod.age}' name='age'>
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input type="email" class="form-control" placeholder="请填写邮箱" value='${usermod.email}' name='email'>
                      </div>
                      <div class="form-group">
                        <label>请选择爱好</label>
                        <div>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="足球" ${usermod.hobbies.indexOf('足球') == -1 ? '': 'checked'} name='hobbies'> 足球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="篮球" ${usermod.hobbies.indexOf('篮球') == -1 ? '': 'checked'} name='hobbies'> 篮球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="橄榄球" ${usermod.hobbies.indexOf('橄榄球') == -1 ? '': 'checked'} name='hobbies'> 橄榄球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="敲代码" ${usermod.hobbies.indexOf('敲代码') == -1 ? '': 'checked'} name='hobbies'> 敲代码
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="抽烟" ${usermod.hobbies.indexOf('抽烟') == -1 ? '': 'checked'} name='hobbies'> 抽烟
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="喝酒" ${usermod.hobbies.indexOf('喝酒') == -1 ? '': 'checked'} name='hobbies'> 喝酒
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="烫头" ${usermod.hobbies.indexOf('足球') == -1 ? '': 'checked'} name='hobbies'> 烫头
                            </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">添加用户</button>
                    </form>
                </div>
            </body>
            </html>`
            res.end(modify)
        }else if (pathname == "/remove") {
            // console.log(query.id);
            await User.findOneAndDelete({_id: query.id})
            res.writeHead(301, {
                Location: '/list'
            })
            res.end('ok')
        }
    } else if (req.method == "POST") {
        if (pathname == "/add") {
            let formDate = "";
            req.on("data", (pomse) => {
                formDate += pomse;
            });
            req.on("end", async () => {
                await User.create(querystring.parse(formDate));
                // 页面重定向
                res.writeHead(301, {
                    Location: "/list",
                });
                res.end();
            });
        } else if (pathname == '/modify') {
            let formmod = ''
            req.on('data',doc => {
                formmod += doc
            })
            req.on('end', async () => {

                let user = querystring.parse(formmod)
                
                await User.updateOne({_id: query.id}, user)
                // 重定向  
                res.writeHead(301, {
                    Location: '/list'
                });
                res.end()
                // 更新  怎么接受id
            })
        }
    }
});

// 监听端口
app.listen(3000);
console.log("服务器启动成功");
