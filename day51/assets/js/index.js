$(function() {
    var layer = layui.layer
    // console.log(window.location.pathname);
    if(window.location.pathname == '/' || window.location.pathname == '/index.html') {
        $.ajax({
            method: 'get',
            url: '/my/userinfo',
            headers: {
                'Authorization': window.localStorage.getItem("token") || '',
            },
            success: function(res) {
                console.log(res);
                if (res.status == 1) {
                    window.localStorage.removeItem('token')
                    location.href = '/login.html'
                }
            }
        })
    }

    $('#logOut').on('click', function() {
        layer.confirm('确认退出？', {icon: 3, title:'提示'}, function(index){
            // 跳转页面
            location.href = '/login.html'
            // 请除token
            window.localStorage.removeItem('token')
            layer.close(index);
          });
    })
})