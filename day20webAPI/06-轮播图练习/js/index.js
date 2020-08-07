window.addEventListener("load", function () {
    // 轮播图界面
    var focus = document.querySelector(".focus");
    // 左侧按钮
    var arrow_l = document.querySelector(".arrow-l");
    // 右侧按钮
    var arrow_r = document.querySelector(".arrow-r");
    // 获取ul
    var ul = focus.querySelector("ul");
    // 获取ol
    var ol = focus.querySelector("ol");
    // 图片
    var num = 0;
    // 小圆圈
    var cilcle = 0;
    // 图片移动的距离
    var focusWidth = focus.offsetWidth;
    console.log(focusWidth);
    // 节流阀
    var flag = true
    // 小圆圈
    for (var i = 0; i < ul.children.length; i++) {
        var lio = document.createElement("li");
        // 添加自定义属性data-index
        lio.setAttribute("data-index", i);
        ol.appendChild(lio);
        // 给小圆圈添加一个点击事件
        lio.addEventListener("click", function () {
            // 排他思想
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            this.className = "pitch";
            // 点击小圆圈的同时移动ul
            var index = this.getAttribute("data-index");
            // 当我们点击li时，将li赋值num,cilcle
            num = index;
            cilcle = index;
            animate(ul, -index * focusWidth);
        });
    }
    // 给小圆圈一个默认白点
    ol.firstElementChild.className = "pitch";

    // 鼠标移动在录播图界面时左右按钮显示
    focus.addEventListener("mouseenter", function () {
        arrow_l.style.display = "block";
        arrow_r.style.display = "block";
        // 鼠标移动到图片上时清除定时器
        clearInterval(timer)
    });
    // 鼠标离开时隐藏
    focus.addEventListener("mouseleave", function () {
        arrow_l.style.display = "none";
        arrow_r.style.display = "none";
        timer = setInterval(function() {
            arrow_r.click()
        },2000)
    });

    // 克隆第一张图片
    var cli = ul.children[0].cloneNode(true);
    ul.appendChild(cli);
    // 点击右按钮是图片滚动  点击一下 ul向左移动一个focusWidth 点击一次num++
    arrow_r.addEventListener("click", function () {
        // console.log(ul.children.length);
        // 开启节流阀
        if (flag) {
            // 关闭节流阀
            flag = false 
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth,function() {
                // 开启节流阀
                flag = true
            });
            // console.log(-num * focusWidth);
            // 小圆圈跟随移动
            cilcle++;
            // console.log(cilcle);
            // console.log(ol.children.length);
            if (cilcle == ol.children.length) {
                cilcle = 0;
            }
            cilcleChange();
        }
    });
    // 点击左按钮是图片滚动  点击一下 ul向右移动一个focusWidth 点击一次num++
    arrow_l.addEventListener("click", function () {
        if (flag) {
            // 关闭阀门
            flag = false
            // console.log(flag);
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + "px";
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                // 开启节流阀
                flag = true
                // console.log(flag);
            });
            // console.log(num);
            cilcle--;
            if (cilcle < 0) {
                cilcle = ol.children.length - 1;
            }
            cilcleChange();
        }
    });

    // 小圆圈的排他
    function cilcleChange() {
        // 先清除全部的类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        ol.children[cilcle].className = "pitch";
    }
    // 开启定时器
    var timer = setInterval(function() {
        arrow_r.click()
    },2000)
});
