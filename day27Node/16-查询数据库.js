const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('数据库连接成功'))
.catch(err => console.log('数据库连接失败',err))

// 创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
})

// 应用规则并创建集合
const User = mongoose.model('User',userSchema)
// =find不传参，表示查询所以的文档
// User.find().then( result => console.log(result))
// User.find({
//     _id: '5c09f267aeb04b22f8460968'
// }).then( result => console.log(result))
// User.findOne().then(result => console.log(result))
// User.findOne({name: '李四'}).then(result => console.log(result))
// 匹配大于和小于
// User.find({age:{$gt:20,$lt:50}}).then(result => console.log(result))
// 匹配包含
// User.find({hobbies: {$in:['足球']}}).then(result => console.log(result))
// 匹配要查询的字段
// User.find().select('name email -_id').then(result => console.log(result))

// 将数据进行升序排序
// User.find().sort('age').then(result => console.log(result))
// 将数据进行降序排序
// User.find().sort('-age').then(result => console.log(result))

// skip跳过多少跳数据，limit限制查询数量
User.find().skip(2).limit(2).then(result => console.log(result))