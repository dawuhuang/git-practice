let layer = layui.layer
let form = layui.form
let laypage = layui.laypage
$(function () {
    // 配置文章查询请求参数
    var q = {
        pagenum: 1,
        pagesize: 2,
        cate_id: '',
        state: ''
    }
    initCate()
    initTable()
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
    // 获取文章列表数据
    function initTable() {
        $.ajax({
            method: 'get',
            url: '/my/article/list',
            data: q,
            success: function (res) {
                // console.log(res);
                if (res.status !== 0) {
                    return layer.msg('获取文章列表数据失败')
                }
                var htmlStr = template("getArtList", res)
                $('tbody').html(htmlStr)

                renderPage(res.total)
            }
        })
    }

    $('.layui-form').on('submit', function (e) {
        e.preventDefault()
        q.cate_id = $('[name=cate_id]').val()
        q.state = $('[name=state]').val()
        // console.log(q);
        initTable()
    })
    function renderPage(total) {
        //执行一个laypage实例
        laypage.render({
            elem: 'test1', //注意，这里的 test1 是 ID，不用加 # 号
            count: total, //数据总数，从服务端得到
            limit: q.pagesize, // 每页显示的条数。
            limits: [2, 5, 10, 15], // 每页条数的选择项。
            curr: q.pagenum, // 起始页。
            layout: ['count', 'limit', 'prev', 'page', 'next', 'skip'],
            jump: function (obj, first) {
                //obj包含了当前分页的所有参数，比如：
                // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                // console.log(obj.limit); //得到每页显示的条数
                q.pagenum = obj.curr
                q.pagesize = obj.limit
                //首次不执行
                if (!first) {
                    initTable()
                }
            }
        });
    }
    // 点击删除按钮
    $('tbody').on('click', '.btn-delete', function () {
        var id = $(this).attr('data-id')
        // 获取删除按钮的个数
        var len = $('.btn-delete').length
        layer.confirm('确定删除?', { icon: 3, title: '提示' }, function (index) {
            $.ajax({
                method: 'get',
                url: '/my/article/delete/' + id,
                success: function(res) {
                    if (res.status !== 0) {
                        return layer.msg("删除文章失败")
                    }
                    layer.msg('删除文章成功', {icon: 6});
                    if (len === 1) {
                        q.pagenum = q.pagenum == 1 ? 1 : q.pagenum - 1
                    }
                    initTable()
                }
            })

            layer.close(index);
        });
    })
})
