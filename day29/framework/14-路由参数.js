const express =require('express')
const app = express()
// 可以让请求地址更加美观，url地址更加容易阅读 :id 占位符 表示希望传递的参数类型
// 指定请求地址需要那些参数
app.get('/find/:id',(req,res) => {
    console.log(req.params);
    res.send('ok')
})
app.listen(3000)
console.log('服务器启动成功'); 
