// 缓动动画的封装
/* 1. 获得盒子当前位置
2. 让盒子在当前位置加上个移动距离
3. 利用定时器不断重复这个操作
4. 加一个结束定时器的条件
5. 注意此元素需要添加定位，才能使用element.style.left */
// obj 移动的对象   target 要移动的距离   callBack 回调函数
function animate(obj, target, callBack) {
    // 清除定时器
    clearInterval(obj.time);
    // 设置定时器
    obj.time = setInterval(() => {
        // 设置布长值
        var stop = (target - obj.offsetLeft) / 10;
        stop = stop > 0 ? Math.ceil(stop) : Math.floor(stop);
        // 到达知道位置时
        if (obj.offsetLeft == target) {
            // 清除定时器
            clearInterval(obj.time);
            // 短路运算  回调函数
            callBack && callBack();
        }
        // 移动距离
        obj.style.top = offsetLeft + stop + "px";
    }, 15);
}
