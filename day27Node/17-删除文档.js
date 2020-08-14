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

// 删除单个文档
// User.findOneAndDelete({_id: '5c09f2b6aeb04b22f846096a'}).then(result => console.log(result))
// 删除多条文档
User.deleteMany({}).then(require => console.log(require))

