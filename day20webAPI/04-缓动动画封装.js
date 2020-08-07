// 封装缓动动画
function animate(obj, target, callBack) {
    // 清除定时器
    clearInterval(obj.time)
    // 设置定时器
    obj.time = setInterval(() => {
        // 设定步长值
        var stop = (target - obj.offsetLeft) / 10
        // 步长取整
        stop = stop > 0 ? Math.ceil(math) : Math.floor(stop)
        // 判断是否到达
        if(obj,offsetLeft == target) {
            // 清除定时器
            clearInterval(obj.time)
            // 调用回调函数
            callBack && callBack()
        }
        // 移动距离
        obj.style.left = offsetLeft + stop + 'px'
    }, 15);
}