let { layer, form } = layui

$(function () {
    // 初始化文章分类列表
    function initCate() {
        $.ajax({
            method: 'get',
            url: '/my/article/cates',
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('获取文章分类列表失败')
                }
                var htmlStr = template("catesList", res)
                // console.log(htmlStr);
                $('[name=cate_id]').html(htmlStr)
                // 表单元素可能是动态插入的 要重新渲染
                // 通过 layui 重新渲染表单区域的UI结构
                form.render()
            }
        })
    }
    initCate()
    // 初始化富文本编辑器
    initEditor()
    // 1. 初始化图片裁剪器
    var $image = $('#image')

    // 2. 裁剪选项
    var options = {
        aspectRatio: 400 / 280,
        preview: '.img-preview'
    }
    // 3. 初始化裁剪区域
    $image.cropper(options)
    $('#btnChooseImage').on('click', function () {
        $('#coverFile')[0].click()
    })
    $('#coverFile').on('change', function (e) {
        var files = e.target.files
        if (files.length == 0) {
            return layer.msg('请选择图片')
        }
        // 根据文件，创建对应的 URL 地址
        var newImgURL = URL.createObjectURL(files[0])
        // 为裁剪区域重新设置图片
        $image
            .cropper('destroy') // 销毁旧的裁剪区域
            .attr('src', newImgURL) // 重新设置图片路径
            .cropper(options) // 重新初始化裁剪区域
    })
    // 定义文章的发布状态
    var art_state = '已发布'
    $('btnSave2').on('click', function () {
        art_state = '草稿'
    })
    $('#form-pub').on('submit', function (e) {
        e.preventDefault()
        // 创建formData表单对象
        var fd = new FormData($(this)[0])
        fd.append('state', art_state)
        // 4. 将封面裁剪过后的图片，输出为一个文件对象
        $image
            .cropper('getCroppedCanvas', {
                // 创建一个 Canvas 画布
                width: 400,
                height: 280
            })
            .toBlob(function (blob) {
                // 将 Canvas 画布上的内容，转化为文件对象
                // 得到文件对象后，进行后续的操作
                // 5. 将文件对象，存储到 fd 中
                fd.append('cover_img', blob)
                // 6. 发起 ajax 数据请求
                publishArticle(fd)
            })
    })
    function publishArticle(fd) {
        $.ajax({
            method: 'post',
            url: '/my/article/add',
            data: fd,
            // 注意：如果向服务器提交的是 FormData 格式的数据，
            // 必须添加以下两个配置项
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('发布文章失败')
                }
                layer.msg('发布文章成功', {
                    icon: 6,
                    time: 2000
                  }, function(){
                    location.href = '/article/art_list.html'
                  });  

            }
        })
    }
})