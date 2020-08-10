var that;
class Tab {
    constructor(id) {
        // 获取元素
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector(".tabadd");
        this.ul = this.main.querySelector("ul");
        this.tabscon = this.main.querySelector(".tabscon");
        this.init();
    }
    // 获取所有的li和section
    updateNode() {
        this.lis = this.main.querySelectorAll("li");
        this.section = this.main.querySelectorAll("section");
        this.del = this.main.querySelectorAll(".icon-guanbi");
        this.span = this.main.querySelector('li span')
        // console.log(this.del);
    }
    // 初始化操作
    init() {
        this.updateNode();
        // 初始化操作让元素绑定事件
        this.add.onclick = this.addTab;

        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.del[i].onclick = this.removeTab;
            this.span.ondblclick = this.editTab
            this.section[i].ondblclick = this.editTab
        }
    }
    // 切换
    toggleTab() {
        // console.log(this.index);
        // li 排他 类名切换
        that.clearClass();
        this.className = "liactive";
        that.section[this.index].className = "conactive";
    }
    // 添加
    addTab() {
        that.clearClass();
        var li = `<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>`;
        var section = `<section class="conactive">测试${Math.random()}</section>`;
        that.ul.insertAdjacentHTML("beforeend", li);
        that.tabscon.insertAdjacentHTML("beforeend", section);
        that.init();

    }
    // 删除
    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        that.lis[index].remove();
        that.section[index].remove();
        if(document.querySelector('.liactive')) return;
        index--
        that.lis[index] && that.lis[index].click();
    }
    // 修改
    editTab() {
        var str = this.innerHTML
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // console.log(str);
        this.innerHTML = `<input type="text" value=${str}>`
        var input = this.children[0]
        // 处于选定状态
        input.select()
        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function(e) {
            if (e.keyCode == 13) {
                this.blur()
            }
        }
    }
    // 清除样式
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.section[i].className = "";
        }
    }
}
// 实例化
new Tab("#tab");
