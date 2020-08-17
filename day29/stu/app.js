// 引入http模块
const http = require('http')
// 引入path模块
const path = require('path')
// 引入第三方模块template模板引擎
const template = require('art-template')
// 引入第三方模块router 实现路由
const getRouter = require('router')
// 引入第三方模块serve-static实现静态资源访问
const serveStatic = require('serve-static')
// 引入第三方模块 querystring 实现格式转换
const querystring = require('querystring')
// 引入第三方模块 dateformat 时间格式化
const dateFormat = require('dateformat')
const serce = serveStatic(path.join(__dirname,'public'))
const router = getRouter()
// 向模板中导入变量
template.defaults.imports.dateFormat = dateFormat
// 设置模板的根目录
template.defaults.root = path.join(__dirname,'views')
// 导入数据库连接
require('./model/contect')
// 导入数据库
const Student = require('./model/user')

// 创建web服务器
const app = http.createServer()

// 呈现添加列表
router.get('/add',(req,res) => {
    
    let html = template('./index.art',{})
    // console.log(html);
    res.end(html)
})

// 呈现列表页面
router.get('/list',async (req,res) => {
    // 查询用户信息
    let students = await Student.find()
    let html = template('./list.art',{students: students})
    res.end(html)
})

// 学生添加页面
router.post('/add',(req,res) => {
    // 接收post请求
    let formData = ''
    req.on('data', param => {
        formData += param
    })
    req.on('end', async () => {
        // 拼接好的数据是字符串格式，转换为对象格式
        // 将数据插入输入库 
        await Student.create(querystring.parse(formData))
        // 重定向
        res.writeHead(301,{
            Location: '/list'
        })
        res.end()
    })
})

// 发送请求和接收响应
app.on('request', (req,res) => {
    router(req,res,() => {})
    serce(req,res,() => {})
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');