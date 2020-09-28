const express = require('express')
const router = require('./01-中间件')

const app = express()

app.use((req, res, next) => {
    console.log('我是中间件');
    next()
})
app.use('/api', router);

app.listen(3000)

new Date().getHours()
new Date().getMinutes()
new Date().getSeconds()