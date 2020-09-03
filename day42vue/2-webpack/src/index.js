import $ from 'jquery'
import './css/1.css'
import './css/2.less'
// import './css/3.scss'
// import App from './components/app.vue'
$(function() {
    $('li:odd').css('backgroundColor','orange')
    $('li:even').css('backgroundColor','green')
})
class Person {
    static info ='aaa'
}
console.log(Person.info);

// -----------------------------------------------

// vue的基本使用步骤
import Vue from 'vue'
import App from './components/app.vue'
const vm = new Vue({
    el: '#app',
    render: h=>h(App)
})