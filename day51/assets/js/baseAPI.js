$.ajaxPrefilter(function (option) {
    option.url = 'http://www.liulongbin.top:3007' + option.url
    // 统一有权限的接口
    if (option.url.indexOf('/my/') !== -1) {
        option.headers = {
            'Authorization': window.localStorage.getItem("token") || '',
        }
        option.complete = function(res) {
            if (res.responseJSON.status === 1 && res.responseJSON.message == '身份认证失败!') {
                location.href = '/login.html'
            }
        }
    }
})