import $ from 'jquery'
import './css/1.css'
import './css/2.less'
// import './css/3.scss'
$(function() {
    $('li:odd').css('backgroundColor','orange')
    $('li:even').css('backgroundColor','green')
})
class Person {
    static info ='aaa'
}
console.log(Person.info);