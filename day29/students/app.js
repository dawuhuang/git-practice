const http = require('http')
const app = http.createServer()
const getRouter = require('router')
const template = require('art-template')
const path = require('path')
const serveStatic = require('serve-static')
const querystring = require('querystring')
const dataFormat = require("dateformat");
template.defaults.imports.dataFormat = dataFormat
// 获取路由对象
const router = getRouter()

// 实现静态资源服务
const serve = serveStatic(path.join(__dirname,'public'))

// 配置模板所在目录
template.defaults.root = path.join(__dirname,'views')
// 呈递学生档案页面
router.get('/add',(req,res) => {
    let html = template('./index.art',{})
    res.end(html)
})
// 呈现学生列表页面
router.get('/list',async (req,res) => {
    // 查询学生信息
    let students = await Student.find()
    
    let html = template('list.art',{students: students})
    res.end(html)
})

// 实现学生信息添加功能
router.post('/add',(req,res) => {
    // 接收post请求参数
    let formData = ''
    req.on('data', param => {
        formData += param
    });
    req.on('end', async () => {
        // console.log(querystring.parse(formData));
        // 将数据插入数据库
        await Student.create(querystring.parse(formData))
        // 重定向
        res.writeHead(301, {
            Location: '/list'
        })
        res.end()
    })
})
require('./model/contect')
const Student = require('./model/user')
app.on('request',(req,res) => {
    // 启用路由功能
    router(req,res, () => {})
    // 启用静态资源访问功能
    serve(req,res, () => {})
})
app.listen(3000)
console.log('服务器启动成功'); 