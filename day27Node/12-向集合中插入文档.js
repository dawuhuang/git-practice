const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('数据库连接成功'))
.catch(err => console.log('数据库连接失败',err)) 

// 创建集合规则
const courseSchame = new mongoose.Schema({
     name: String,
     author: String,
     isPublished: Boolean
 })

//  使用规则创建集合
const Course = mongoose.model('Course',courseSchame)

// 创建集合实例 文档
// const couse = new Course({
//     name: 'node.js基础',
//     author: '张三',
//     isPublished: true
// })
// // 将文档插入到数据库
// couse.save()

// 向集合中插入文档
// Course.create({
//     name: 'node.js基础',
//     author: '张三',
//     isPublished: true
// },(err,doc) => {
//     console.log(err);
//     console.log(doc);
// })
Course.create({
    name: 'node.js基础',
    author: '张三1',
    isPublished: true
})
.then(doc => console.log(doc))
.catch(err => console.log(err))