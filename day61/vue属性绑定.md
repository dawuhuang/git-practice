# vue 属性绑定
## 绑定对象
1. v-bind 中支持绑定一个对象，如果绑定的是一个对象，则`键`为对应的类名，`值`为对应data 中的数据
```js
<ul class='box' v-bind:class='{text}'>

</ul>
```