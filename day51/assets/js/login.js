$(function () {
    var form = layui.form
    var layer = layui.layer
    // 去登录页面
    $("#goLogin").on("click", function () {
        $('.RegBox').hide()
        $('.login').show()
    })
    // 去注册页面
    $("#goRegister").on("click", function () {
        $('.RegBox').show()
        $('.login').hide()
    })
    form.verify({
        username: function (value) { //value：表单的值、item：表单的DOM对象
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '用户名不能有特殊字符';
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '用户名首尾不能出现下划线\'_\'';
            }
        },

        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        pass: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repwd: function (value) {
            var pwd = $('#regForm [name=password]').val()
            if (pwd !== value) {
                return '两次输入的密码不一样'
            }
        }
    })
    // 表单提交时进行验证  注册
    $('#regForm').on('submit', function (e) {
        // 阻止默认的表单提交
        e.preventDefault()
        $.ajax({
            method: 'post',
            url: 'http://ajax.frontend.itheima.net/api/reguser',
            data: {
                username: $('#regForm [name=username]').val(),
                password: $('#regForm [name=password]').val()
            },
            success: function (res) {
                // console.log(res);
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功', { icon: 6 });
                $('#goLogin').click()
            }
        })
    })
    // 登录
    $('#loginform').on('submit', function (e) {
        // 阻止默认的表单提交
        e.preventDefault()
        $.ajax({
            method: 'post',
            url: 'http://ajax.frontend.itheima.net/api/login',
            data: $(this).serialize(),
            success: function (res) {
                // console.log(res);
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('登录成功', { icon: 6 });
                location.href = '/index.html'
            }
        })
    })
})