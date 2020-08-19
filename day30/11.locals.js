// locals 全局对象

const express =require('express')
const path = require('path')
const app = express()

app.engine('art',require('express-art-template'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'art')
app.get('/list',(req,res) => {
    res.render('list',{msg: 'list123'})
})
app.locals.user = {
    name: 'zs',
    age: 20
}


app.listen(3000)
console.log('服务器启动成功');