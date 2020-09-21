$(function() {
    var layer = layui.layer
    var form = layui.form
    userInfo()
    function userInfo() {
        $.ajax({
            method: 'get',
            url: '/my/userinfo',
            success: function(res) {
                // console.log(res);
                if (res.status !== 0) {
                    return layer.msg('获取用户基本信息失败')
                }
                form.val('userInfoForm',res.data)
                
            }
        })
    }
    $('#reset').on('click',function(e) {
        e.preventDefault()
        userInfo()
    })
    // 对昵称进行验证
    form.verify({
        nickname: function (value) { //value：表单的值、item：表单的DOM对象
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '昵称名不能有特殊字符';
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '昵称名首尾不能出现下划线\'_\'';
            }
        }
    })
    // 对用户信息进行更正
    $('#modifyUserInfo').on('submit',function(e) {
        e.preventDefault()
        // console.log($(this).serialize());
        $.ajax({
            method: 'post',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                // console.log(res);
                if (res.status !== 0) {
                    return layer.msg("修改用户信息失败")
                }
                layer.msg('修改用户信息成功！', {icon: 6}); 
                // 跳转到首页
                window.parent.getUserInfo()
            }
        })
    })

})