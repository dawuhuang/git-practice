const mongoose = require('mongoose')
// 创建数据库规则
var stuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    email: {
        type:String
    },
    sex: String,
    hobbies: {
        type: [String]
    },
    collage: String,
    enterDate: String
})
// 根据规则创建数据库
const Stu = mongoose.model('Student', stuSchema)
// 向外导出数据库
module.exports = Stu
