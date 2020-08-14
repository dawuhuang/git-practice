const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology: true })
.then( () => console.log('数据库连接成功'))
.catch(err => console.log('数据连接失败',err))

// 创建集合规则
const courseSchame = new mongoose.Schema({
    name:String,
    author: String,
    isPublished: Boolean
})
// 应用规则
const Course = mongoose.model('Course',courseSchame)

// 插入数据
const course = new Course({
    name: 'Node',
    author:'张三',
    isPublished: true
})
// 保存
course.save()