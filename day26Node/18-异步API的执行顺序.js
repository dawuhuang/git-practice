console.log('代码开始执行');
setTimeout(() => {
    console.log('2秒后代码的执行');
}, 2000);
setTimeout(() => {
    console.log('0秒后代码执行');
}, 0);
console.log('代码执行结束');