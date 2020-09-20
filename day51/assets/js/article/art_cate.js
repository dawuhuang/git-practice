$(function () {
    getCateGory()
    // 点击按钮删除分类 需要事件委托
    $("tbody").on('click', '.btn-delete', function (e) {
        // console.log(1);
        var id = $(this).attr('data-id')
        layer.confirm('确认删除?', { icon: 3, title: '提示' }, function (index) {
            // console.log(id);
            $.ajax({
                method: 'get',
                url: '/my/article/deletecate/' + id,
                success: function (res) {
                    if (res.status !== 0) {
                        return layer.msg('删除文章分类失败')
                    }
                    layer.msg('删除文章分类成功', { icon: 6 });
                    getCateGory()
                }
            })
            layer.close(index);
        });
    })
    // 点击新增
    var index = null
    $("#btnAddCate").on('click', function () {
        index = layer.open({
            title: '添加文章分类',
            type: 1,
            content: $('#AddCate').html(),
            area: ['470px', '240px']
        });
        $('#AddCateForm').on('submit', function (e) {
            // 阻止默认提交
            e.preventDefault()
            $.ajax({
                method: 'post',
                url: '/my/article/addcates',
                data: $(this).serialize(),
                success: function (res) {
                    if (res.status !== 0) {
                        return layer.msg('新增文章分类失败')
                    }
                    getCateGory()
                    layer.msg('新增文章分类成功', { icon: 6 });
                    layer.close(index)
                }
            })
        })
    })

    // 点击按钮修改
    $('tbody').on('click', '.btn-edit', function () {
        console.log(1);
        index = layer.open({
            title: '添加文章分类',
            type: 1,
            content: $('#changeCate').html(),
            area: ['470px', '240px']
        });
        var id = $(this).attr('data-id')
        $.ajax({
            method: 'get',
            url: '/my/article/cates/' + id,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('获取文章分类数据失败')
                }
                form.val('CateFormAss', res.data)
            }
        })
        // 根据id更新文章分类数据
        $('#changeCateForm').on('submit', function (e) {
            e.preventDefault()
            // console.log($(this).serialize());
            $.ajax({
                method: 'post',
                url: '/my/article/updatecate',
                data: $(this).serialize(),
                success: function (res) {
                    console.log(res);
                    if (res.status !== 0) {
                        return layer.msg("更新分类信息失败")
                    }
                    layer.close(index)
                    getCateGory()
                    layer.msg('新增文章分类成功', { icon: 6 });
                }
            })
        })

    })
})
var layer = layui.layer
var form = layui.form
function getCateGory() {
    $.ajax({
        method: 'get',
        url: '/my/article/cates',
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg("获取文章分类列表失败")
            }
            // console.log(res.data);
            var html = template("category", res)
            // console.log(html);
            $('tbody').html(html)
        }
    })
}