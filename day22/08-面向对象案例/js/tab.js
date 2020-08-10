var that
class Tab{
    constructor(id) {
        that = this
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('ul')
        this.tabscon = this.main.querySelector('.tabscon')
       
        this.init()
    }
    updataTab() {
        this.lis = this.main.querySelectorAll('ul li')
        this.section = this.main.querySelectorAll('section')
        this.spans = this.main.querySelectorAll('.icon-guanbi')
        this.tospan = this.main.querySelectorAll('li span:first-child')
    }
    // 初始化
    init() {
        this.updataTab()
        this.add.onclick = this.addTab
        for(var i = 0 ;i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.spans[i].onclick = this.removeTab
            this.tospan[i].ondblclick = this.amendTab
            this.section[i].ondblclick = this.amendTab
        }
    }
    // 切换
    toggleTab() {
        // 类名切换 排他
        that.emptyClass()
        var index = this.index
        this.className = 'liactive'
        that.section[index].className = 'conactive'
    }
    // 清除类名
    emptyClass() {
        for(var i = 0 ; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.section[i].className = ''
        }
    }
    // 增加
    addTab() {
        that.emptyClass()
        var li = `<li class="liactive"><span>新项目</span><span class="iconfont icon-guanbi"></span></li>`
        var section = `<section class="conactive">测试${Math.random()}</section>`
        that.ul.insertAdjacentHTML('beforeend',li) 
        that.tabscon.insertAdjacentHTML('beforeend',section)
        that.init()
    }
    // 删除
    removeTab(e) {
        e.stopPropagation()
        var index = this.parentNode.index
        that.lis[index].remove()
        that.section[index].remove()
        if (document.querySelector('.liactive')) return;
        if (index <= 0) {
            index = 0
        }else{
            index--
        }
        that.init()
        if (that.lis.length == 0) {
            return
        }
        that.lis[index].click()
        // that.init()
    }
    // 修改
    amendTab() {
        // alert(11)
        var str = this.innerHTML
        console.log(str);
        this.innerHTML = `<input type="text" value=${str}>`
        var input = this.querySelector('input')
        input.select()
        // console.log(input);
        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function(e) {
            if (e.keyCode == 13) {
                this.blur()
            }
        }
    }
}
new Tab("#tab")