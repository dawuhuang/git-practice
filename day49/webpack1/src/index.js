import $ from 'jQuery'
import './css/index.css'
$(function(){
    $('li:odd').css('background','cyan')
    $('li:even').css('background','pink')
})