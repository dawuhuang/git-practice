const express = require('express')
const path = require('path')
const app = express()

// 开启静态资源访问功能
app.use(express.static(path.join(__dirname,'public')))

// 验证邮箱地址的唯一性
app.get('/verifyEmailAdress',(req,res) => {
    const email = req.query.email
    if (email == '10086@qq.com') {
        res.status(400).send({msg:'邮箱地址已经注册过，请跟换其他邮箱地址'})
    }else {
        res.send({msg: '邮箱地址可用'})
    }
})

// 搜索框自动提升
app.get('/searchAutoPrompt',(req,res)=> {
    var key = req.query.key
    const list = [
        '黑马程序员',
		'黑马程序员官网',
		'黑马程序员顺义校区',
		'黑马程序员学院报名系统',
		'传智播客',
		'传智博客前端与移动端开发',
		'传智播客大数据',
		'传智播客python',
		'传智播客java',
		'传智播客c++',
		'传智播客怎么样'
    ]
    let result = list.filter(item => item.includes(key))
    res.send(result)
})
app.listen(3000)
console.log('服务器器启动成功');