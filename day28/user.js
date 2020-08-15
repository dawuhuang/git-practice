const mongoose = require('mongoose')
// 创建集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, '名字最小长度是2'],
        maxlength: [6,'名字最大长度是6'],
        required: [true, 'name是必填项'],
        trim: true
    },
    age: {
        type: Number,
        min: [16,'最小年龄为16'],
        max: [100,'最小年龄为100'],
        required: [true, 'age是必填项'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email是必填项'],
        trim: true
    },
    password: {
        type: Number,
        minlength: [6,'密码最小长度为6'],
        maxlength: [16,'密码最大长度为16'],
        required: [true,'密码是必填项']
    },
    hobbies: {
        type: [String],
        enum: ['足球','篮球','橄榄球','敲代码','抽烟','喝酒','烫头'],
        required: [true, '爱好是必填项']
    }
})
const User = mongoose.model('User',userSchema);

module.exports = User