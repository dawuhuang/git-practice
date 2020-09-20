$(function () {
    var layer = layui.layer
    // console.log(window.location.pathname);
    if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
        $.ajax({
            method: 'get',
            url: '/my/userinfo',

            success: function (res) {
                // console.log(res);
                if (res.status == 1) {
                    window.localStorage.removeItem('token')
                    location.href = '/login.html'
                    return false
                }
                userInfo(res.data)
            }
        })
    }

    $('#logOut').on('click', function () {
        layer.confirm('确认退出？', { icon: 3, title: '提示' }, function (index) {
            // 跳转页面
            location.href = '/login.html'
            // 请除token
            window.localStorage.removeItem('token')
            layer.close(index);
        });
    })
    function userInfo(data) {
        // 第一优先级 图片 第二优先级 昵称 第三优先级用户名
        if (data.user_pic) {
            // 字符头像隐藏
            $('.text-avatar').hide()
            // 图片头像显示
            $('.layui-nav-img').show().prop('src', data.user_pic)
            $('.text-avatar').siblings('span').text('欢迎：' + data.username)}
        //  else if (data.nickname) {
        //     // 图片头像隐藏
        //     $('.layui-nav-img').hide()
        //     // 字符头像显示
        //     // 找出头像的字符串第一个
        //     $('.text-avatar').show().html(data.nickname[0].toUpperCase())
        //     $('.text-avatar').siblings('span').text('欢迎：' + data.username)
        // } else {
        //     // 图片头像隐藏
        //     $('.layui-nav-img').hide()
        //     // 字符头像显示
        //     // 找出头像的字符串第一个
        //     $('.text-avatar').show().html(data.username[0].toUpperCase())
        //     $('.text-avatar').siblings('span').text('欢迎：' + data.username)
        // }
        // 代码优化
        else {
            $('.layui-nav-img').hide()
            $('.text-avatar').siblings('span').text('欢迎：' + data.username)
            var name = data.nickname || data.username || '**'
            $('.text-avatar').show().html(name[0].toUpperCase())
        }
    }
})