// 思路 1，按下回车把新数据添加到本地存储里面，页面中是所有数据都是从本地存储里面获取的
// 先判断用户按下的回车健13，先要读取本地存储原来的数据，如果有，就读取，如果没有，就设置个空数组
// 读取本地存储里面是数据可以封装为一个函数
// 保存本地存储也可以封装为一个函数

// 2，将本地存储里面是数据渲染到页面当这中，先读取本地存储里面的数据，在遍历渲染

$(function () {
    // 刷新前先渲染
    load()
    //1 按下回车记录数据
    $("#title").on("keyup", function (e) {
        if (e.keyCode == 13) {
            // 先读取本地数据
            var local = getData();
            console.log(local);
            local.push({ title: $(this).val(), done: false });
            saveData(local);
            $(this).val("");
            load()
        }
    });

    //2 删除操作
    $('#todolist').on('click','a',function() {
        var index = $(this).parent().attr('data-index')
        // 根据索引删除数据
        var arr = getData()
        arr.splice(index,1)
        // 保存
        saveData(arr)
        load()
    })

    //3 点击复选框修改本地存储数据
    $('section').on('change','input', function() {
        index = $(this).parent().attr('data-index')
        var delDate = getData();
        delDate[index].done = $(this).prop('checked')
        
        // console.log(delDate[index].done);
    })

    // 读取本地存储里面的数据
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 保存到本地
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    // 渲染到本地
    function load() {
        // 先清空
        $("#todolist").empty()
        // 先读取本地
        var loadDate = getData();
        $.each(loadDate, function (i, docEle) {
            // console.log($(docEle)[0].title);  
            // 首先 i是在each里面的，不会影响
            // console.log(docEle.done);
            if (docEle.done) {
                $("#donelist").prepend(`<li data-index=${i}><input type="checkbox" ><p>${$(docEle)[0].title}</p><a href="javascript:;"></a></li>`);  
            }else {
                $("#todolist").prepend(`<li data-index=${i}><input type="checkbox"><p>${$(docEle)[0].title}</p><a href="javascript:;"></a></li>`);  
            }
           
        });
    }
});
