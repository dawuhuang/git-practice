const fs = require('fs')

function f1() {
    return new Promise((resolve,reject) =>{
        fs.readFile('./a.txt','utf8',(err,doc) => {
            resolve(doc)
        })
    })
}
function f2() {
    return new Promise((resolve,reject) =>{
        fs.readFile('./b.txt','utf8',(err,doc) => {
            resolve(doc)
        })
    })
}
function f3() {
    return new Promise((resolve,reject) =>{
        fs.readFile('./c.txt','utf8',(err,doc) => {
            resolve(doc)
        })
    })
}

f1().then(r1 => {
    console.log(r1);
    return f2()
})
.then(r2 => {
    console.log(r2);
    return f3()
})
.then(r3 => {
    console.log(r3);
})