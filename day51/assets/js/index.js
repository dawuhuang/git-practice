$(function() {
    var layer = layui.layer
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