$(function() {
    // 每次刷新前先渲染
    load()
    $('#title').on('keyup', function(e) {
        if (e.keyCode == 13) {
            if ($(this).val().trim() == '') {
                return
            }
            var local = getData()
            local.push({title: $(this).val(),done: false})
            // console.log(local);
            saveDate(local)
            // 清空输入框
            $(this).val('')
            load()
        }
    })

    // 点击删除
    $('ol,ul').on('click', 'a', function() {
        var data = getData()
        var index = $(this).parent().attr('data-index')
        // console.log(index);
        // 删除数组 splice
        data.splice(index, 1)
        saveDate(data)
        load()
    })

    // 修改完成状态
    $('ol,ul').on('click', 'input', function() {
        var data = getData()
        index = $(this).parent().attr('data-index')
        // console.log(index)
        data[index].done = $(this).prop('checked')
        // console.log(data);
        saveDate(data)
        load()
    })
    
    // 读取本地存储里面的数据
    function getData() {
        var data = localStorage.getItem('todolist')
        if (data != null) {
            return JSON.parse(data)
        }else {
            return []
        }
    }

    // 保存数据到本地存储
    function saveDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data))
    }

    // 将本地数据渲染到本地
    function load() {
        var data = getData()
        // 先清空当前页面的数据
        $('ol,ul').empty()
        var todoCount = 0
        var doneCount = 0
        $.each(data, function(i,docEle) {
            if (docEle.done) {
                $('ul').prepend(`<li data-index='${i}'><input type="checkbox" checked><p><s>${docEle.title}</s></p><a href="javascript:;"></a></li>`)
                doneCount++
            }else {
                $('ol').prepend(`<li data-index='${i}'><input type="checkbox"><p>${docEle.title}</p><a href="javascript:;"></a></li>`)
                todoCount++
            }
        })
        $('#todocount').html(todoCount)
        $('#donecount').html(doneCount)
    }
})