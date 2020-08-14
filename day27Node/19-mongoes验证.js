const mongoose = require("mongoose");

// 数据库连接
mongoose
    .connect("mongodb://localhost/playground", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("数据库连接成功"))
    .catch((err) => console.log("数据库连接失败", err));

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "请传入文章标题"],
        maxlength: [5, "最大长度是5"],
        minlength: [2, "最小长度是2"],
        // trim: true
    },
    age: {
        type: Number,
        // 数字的最小范围
        min: [18, "年龄最小为18"],
        // 数字的最大范围
        max: [100, "年龄最大为100"],
    },
    publishDate: {
        type: Date,
        // 默认值
        default: Date.now,
    },
    category: {
        type: String,
        // 列举出当前字段可以拥有的一些值
        enum: {
            values: ["html", "css", "javascript", "node.js"],
            message: '分类名称要在一点的范围内'
        },
    },
    author: {
        type: String,
        validate: {
            validator: (v) => {
                // 返回布尔值 true 验证成功 false 验证失败
                return v && v.length > 4;
            },
            // 自定义错误信息
            message: "传入的值不符合规则",
        },
    },
});

const Post = mongoose.model("Post", postSchema);

Post.create({ title: "  aa", age: 7, category: "css1", author: "bd" })
    .then((result) => console.log(result))
    .catch((error) => {
        // 获取错误信息对象
        const err = error.errors
        // 循环错误信息对象
        for (var attr in err) {
            // 将错误信息打印在控制台中
            console.log(err[attr]['message']);
        }
    });
