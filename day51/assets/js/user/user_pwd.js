$(function () {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        samePwd: function (value) {
            if (value === $('[name=oldPwd]').val()) {
                return '新旧密码不能相同！'
            }
        },
        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        reqpwd: function (value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码不一致！'
            }
        }
    });
    $("#getChangeForm").on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            method: 'post',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg("更新密码失败")
                }
                layer.msg('更新密码成功，请重新登录', {
                    icon: 6,
                  }, function(){
                    //do something
                    window.localStorage.removeItem('token')
                    // 将用户登出
                    window.parent.getUserInfo()
                  });  

            }
        })
    })

})