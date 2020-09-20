$(function () {
    var layer = layui.layer
    //  裁剪图片插件
    var $image = $('#image')
    var option = {
        aspectRatio: 1,
        viewMode: 1,
        preview: ".img-preview",
    }
    $image.cropper(option)
    // 为上传按钮绑定点击事件
    $("#btnChooseImage").on('click', function () {
        $('#file')[0].click()
    })
    // 为文件选择框绑定change事件
    $('#file').on('change', function (e) {
        var filelist = e.target.files
        // console.log(filelist);
        if (filelist.length == 0) {
            return layer.msg('请选择图片')
        }
        // 1用户拿到图片，将图片转换为路径，重新初始化裁剪区域
        var file = filelist[0]
        var imgURL = URL.createObjectURL(file)
        $image.cropper('destroy').prop('src', imgURL).cropper(option)
    })
    // 点击确定按钮
    $("#btnUpload").on('click', function() {
        var dataURL = $image.cropper('getCroppedCanvas', {
            width: 100,
            height: 100,
        }).toDataURL('image/png')
        $.ajax({
            method: 'post',
            url: '/my/update/avatar',
            data: {
                avatar: dataURL
            },
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('更新头像失败')
                }
                layer.msg('更新头像成功',{inco:6})
                window.parent.getUserInfo()
            }
        })
    })
})