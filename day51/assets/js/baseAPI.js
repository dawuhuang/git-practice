$.ajaxPrefilter(function (option) {
    option.url = 'http://www.liulongbin.top:3007' + option.url
    // 统一有权限的接口
    if (option.url.indexOf('/my/') !== -1) {
        option.headers = {
            'Authorization': window.localStorage.getItem("token") || '',
        }
    }
})