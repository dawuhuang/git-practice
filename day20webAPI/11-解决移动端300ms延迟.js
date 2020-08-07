// 1. 当我们手指触摸屏幕，记录当前触摸时间
// 2. 当我们手指离开屏幕， 用离开的时间减去触摸的时间
// 3. 如果时间小于150ms，并且没有滑动过屏幕， 那么我们就定义为点击
function tab(obj, callback) {
    // 是否移动
    var isMove = false;
    // 初始触摸时间
    var startTime = 0;
    // 手指触摸
    obj.addEventListener("touchstart", function (e) {
        startTime = +new Date();
    });
    // 手指移动
    obj.addEventListener("touchmove", function (e) {
        isMove = false;
    });
    // 手指离开
    obj.addEventListener("touchend", function (e) {
        if (!isMove && +new Date() - startTime <= 150) {
            callback && callback();
        }
        ifMoove = true;
        startTime = 0;
    });
}
