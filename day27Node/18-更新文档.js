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

// 更新单个
// User.updateOne({name: '李四'}, {name: '李狗蛋'})
// .then(result => console.log(result))

//更新多个
User.updateMany({}, {age: 56})
.then(result => console.log(result))



