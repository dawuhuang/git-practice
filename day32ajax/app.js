const express = require('express')
const path = require('path')
const formidable = require('formidable')
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

// 获取省份
app.get('/province', (req, res) => {
	res.send([{
		id: '001',
		name: '黑龙江省'
	},{
		id: '002',
		name: '四川省'
	},{
		id: '003',
		name: '河北省'
	},{
		id: '004',
		name: '江苏省'
	}]);
});

// 根据省份id获取城市
app.get('/cities', (req, res) => {
	// 获取省份id
	const id = req.query.id;
	// 城市信息
	const cities = {
		'001': [{
			id: '300',
			name: '哈尔滨市'
		}, {
			id: '301',
			name: '齐齐哈尔市'
		}, {
			id: '302',
			name: '牡丹江市'
		}, {
			id: '303',
			name: '佳木斯市'
		}],
		'002': [{
			id: '400',
			name: '成都市'
		}, {
			id: '401',
			name: '绵阳市'
		}, {
			id: '402',
			name: '德阳市'
		}, {
			id: '403',
			name: '攀枝花市'
		}],
		'003': [{
			id: '500',
			name: '石家庄市'
		}, {
			id: '501',
			name: '唐山市'
		}, {
			id: '502',
			name: '秦皇岛市'
		}, {
			id: '503',
			name: '邯郸市'
		}],
		'004': [{
			id: '600',
			name: '常州市'
		}, {
			id: '601',
			name: '徐州市'
		}, {
			id: '602',
			name: '南京市'
		}, {
			id: '603',
			name: '淮安市'
		}]
	}
	// 响应
	res.send(cities[id]);
});

// 根据城市id获取县城
app.get('/areas', (req, res) => {
	// 获取城市id
	const id = req.query.id;
	// 县城信息
	const areas = {
		'300': [{
			id: '20',
			name: '道里区',
		}, {
			id: '21',
			name: '南岗区'
		}, {
			id: '22',
			name: '平房区',
		}, {
			id: '23',
			name: '松北区'
		}],
		'301': [{
			id: '30',
			name: '龙沙区'
		}, {
			id: '31',
			name: '铁锋区'
		}, {
			id: '32',
			name: '富拉尔基区'
		}]
	};
	// 响应
	res.send(areas[id] || []);
});

app.post('/formData',(req,res)=> {
    // 创建formidable 表单解析对象
    const form = new formidable.IncomingForm()
    // 解析客户端传递过来的FormData对象，第一个对象是错误对象 第二个参数是表单参数，第三个参数是文件上传的信息
    form.parse(req,(err,fields,files) => {
        res.send(fields)
    })
})

// FormData 二进制文件上传
app.post('/upload', (req,res) => {
    // 创建form表单解析对象
    const form = new formidable.IncomingForm()
    // 设置客户端上传文件的存储路径
    form.uploadDir = path.join(__dirname,'public','uploads')
    // 保留上传文件的后缀名字
    form.keepExtensions = true
    // 解析客户端传递过来的formData 对象
    form.parse(req,(err,fields,files) => {
        res.send({path:files.attrName.path.split('public')[1]})
            // path: files.attrName.path.split('public')[1]
       
    })
})
app.listen(3000)
console.log('服务器器启动成功');