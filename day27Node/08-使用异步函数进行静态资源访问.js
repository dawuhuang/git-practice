const fs = require('fs')
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)

async function run() {
    let r1 = await readFile('a.txt','utf8')
    let r2 = await readFile('b.txt','utf8')
    let r3 = await readFile('c.txt','utf8')
    console.log(r1);
    console.log(r2);
    console.log(r3);
}
run()