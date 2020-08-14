const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('数据库连接成功'))
.catch(err => console.log('数据库连接失败',err))

// 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})

// 应用规则并创建集合
const Course = mongoose.model('Course',courseSchema)

// 在集合中插入文档
// Course.create({
//     name: 'Ajax',
//     author: '王五',
//     isPublished: false
// }, (err,doc) => {
//     console.log(err);
//     console.log(doc);
// })
Course.create({
    name: 'jQuery',
    author: '李四',
    isPublished: true
})
.then( () => console.log('数据插入成功'))
.catch(err => console.log('数据库插入失败',err))

