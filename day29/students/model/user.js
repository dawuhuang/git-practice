const mongoose = require('mongoose')
const sutdentsSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: {
        type: String
    },
    email: {
        type: String,
    },
    hobbies: {
        type: [String],
    },
    collage: {
        type: String
    },
    enterDate: {
        type: Date,
        default: Date.now()
    }
})
// 创建数据库
const Student = mongoose.model('Student',sutdentsSchema)
// 向外导出
module.exports = Student