// 连接数据库
const http = require('http')
const mongoose = require('mongoose')
const url = require('url')
const querystring = require('querystring')


const app = http.createServer()
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true,useUnifiedTopology: true })
.then( () => console.log('数据库连接成功'))
.catch( err => console.log('数据库连接失败',err))


// 创建集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, '名字最小长度是2'],
        maxlength: [6,'名字最大长度是6'],
        required: [true, 'name是必填项'],
        trim: true
    },
    age: {
        type: Number,
        min: [16,'最小年龄为16'],
        max: [100,'最小年龄为100'],
        required: [true, 'age是必填项'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email是必填项'],
        trim: true
    },
    password: {
        type: Number,
        minlength: [6,'密码最小长度为6'],
        maxlength: [16,'密码最大长度为16'],
        required: [true,'密码是必填项']
    },
    hobbies: {
        type: [String],
        enum: ['足球','篮球','橄榄球','敲代码','抽烟','喝酒','烫头'],
        required: [true, '爱好是必填项']
    }
})
const User = mongoose.model('User',userSchema);

app.on('request',async (req,res) => {

    // 获取请求方式
    const method = req.method
    // 获取请求地址
    let {pathname,query} = url.parse(req.url,true)
    if (method == 'GET') {
        // 呈现列表页面
        if (pathname == '/list' || pathname == '/') {
            // 获取用户信息
            let users = await User.find()
            // console.log(users);
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
                        </tr>`
            
            // 对数据进行循环
            users.forEach(function(item) {
                let hobbies = ''
                item.hobbies.forEach(function(item) {
                    hobbies += `<span>${item}</span> `
                })

                list += `			<tr>
				<td>${item.name}</td>
				<td>${item.age}</td>
				<td>
					${hobbies}
				</td>
				<td>${item.email}</td>
				<td>
					<a href="/remove?id=${item.id}" class="btn btn-danger btn-xs">删除</a>
					<a href="/modify?_id=${item.id}" class="btn btn-success btn-xs">修改</a>
				</td>
			</tr>`
            })            
            list +=`</table>
            </div>
        </body>
        
        </html>`
            
            res.end(list)
        }
        else if (pathname == '/add') {

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
                        <input name='name' type="text" class="form-control" placeholder="请填写用户名">
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input name='password' type="password" class="form-control" placeholder="请输入密码">
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input name='age' type="text" class="form-control" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input name='email' type="email" class="form-control" placeholder="请填写邮箱">
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
            </html>`
            res.end(add)
        
        }
        else if (pathname == '/modify') {
            // let {query} = url.parse(req.url,true);
            let str = JSON.stringify(query)
            str = JSON.parse(str)
            // console.log(str);
            let usermod = await User.findOne(str)
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
                    <h3>修改用户</h3>
                    <form method='post' action='/modify?id=${usermod._id}'>
                      <div class="form-group">
                        <label>用户名</label>
                        <input name='name' type="text" class="form-control" placeholder="请填写用户名" value='${usermod.name}'>
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input name='password' type="password" class="form-control" placeholder="请输入密码" value='${usermod.password}'>
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input name='age' type="text" class="form-control" placeholder="请填写年龄" value='${usermod.age}'>
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input name='email' type="email" class="form-control" placeholder="请填写邮箱" value='${usermod.email}'>
                      </div>
                      <div class="form-group">
                        <label>请选择爱好</label>
                        <div>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="足球" name='hobbies' ${usermod.hobbies.indexOf('足球') == -1 ? '': 'checked'}> 足球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="篮球" name='hobbies' ${usermod.hobbies.indexOf('篮球') == -1 ? '': 'checked'}> 篮球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="橄榄球" name='hobbies' ${usermod.hobbies.indexOf('橄榄球') == -1 ? '': 'checked'}> 橄榄球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="敲代码" name='hobbies' ${usermod.hobbies.indexOf('敲代码') == -1 ? '': 'checked'}> 敲代码
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="抽烟" name='hobbies' ${usermod.hobbies.indexOf('抽烟') == -1 ? '': 'checked'}> 抽烟
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="喝酒" name='hobbies' ${usermod.hobbies.indexOf('喝酒') == -1 ? '': 'checked'}> 喝酒
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="烫头" name='hobbies' ${usermod.hobbies.indexOf('烫头') == -1 ? '': 'checked'}> 烫头
                            </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">修改用户</button>
                    </form>
                </div>
            </body>
            </html>`
            res.end(modify)
        }
        else if (pathname == '/remove') {
            await User.findOneAndDelete({_id: query.id})
            res.writeHead(301, {
                Location: '/list'
            })
            res.end( )
        }
    }else if (method == 'POST') {
        if (pathname == '/add') {
            // 接收用户提交的信息，将用户提交的信息
            let formData = ''
            req.on('data', param => {
                formData += param
            })
            req.on('end',  async () => {
                // console.log(querystring.parse(formData));
                let user = querystring.parse(formData)
                await User.create(user)

                // 重定向  
                res.writeHead(301, {
                    Location: '/list'
                });
                res.end()
            })
            
        }else if (pathname = '/modify') {
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
    
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');