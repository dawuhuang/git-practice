let num = 100;
let a = 10;
let b = 20;
function show() {
    console.log('11111');
}
export default {
    a,b,show
}

// 每个模块中，只允许使用唯一一次 export default ,否则会报错。如果不设置，会默认导出一个空对象
// export default {
//     a
// }