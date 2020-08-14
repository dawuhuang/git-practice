const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('数据库连接成功'))
.catch(err => console.log('数据库连接失败',err))

// 创建集合验证规则
// 用户集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})
// 文章集合规则
const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
// 创建集合
const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post',postSchema)

// 创建用户
// User.create({name: '张三'}).then(result => console.log(result))
// Post.create({title: '123',author: '5c09f1e5aeb04b22f8460965'}).then(result => console.log(result))

Post.find().populate('author').then(result => console.log(result))