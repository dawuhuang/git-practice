$(function () {
    // 1，全新 与全不选
    $(".checkall").change(function () {
        $(".checkall").prop("checked", $(this).prop("checked"));
        // 物品栏的复选框
        $(".j-checkbox").prop("checked", $(this).prop("checked"));
        //
        priceSum()
        bgc()
    });
    // 单选
    // 遍历 ，给每个单选框添加个change事件
    $('.j-checkbox').each(function(i,docEle) {
        $(docEle).change(function() {
            // 循环判断 每个单选框 
            priceSum()
            bgc()
            $.each($('.j-checkbox'), function(i,docEle) {
                // 如果 存在 ！false  将全新赋值为false ，结束
                if (!$(docEle).prop('checked')) {
                    console.log($(docEle).prop('checked'));
                    $(".checkall").prop("checked", false);
                    // 阻止函数继续向下执行
                    return false
                }else {
                    console.log(1);
                    $(".checkall").prop("checked", true);
                }
            })
        })
    })


    // 2，增减商品数量
    // 点击+增加商品数量
    $('.increment').click(function() {
        var num = parseInt($(this).siblings('input').val())
        // console.log(num); 
        num++
        $(this).siblings('input').val(num)
        shopsum($(this),num)
    })
    // 点击-减少商品数量
    $('.decrement').click(function() {
        var num = parseInt($(this).siblings('input').val())
        num--
        num = num <= 1 ? 1 : num 
        $(this).siblings('input').val(num)
        shopsum($(this),num)
    })
    // 直接修改商品数量
    $('.itxt').blur(function() {
        var num = $(this).val()
        if (num == null || num <= 1) {
            num = 1
        }
        $(this).val(num)
        shopsum($(this),num)
    })
    // 3, 商品小计
    function shopsum(obj,num) {
        // console.log(obj);
        // 价格   =  自己.父亲.兄弟.文本，字符串截取
        // console.log(obj.parent().parent().siblings('.p-sum'));
        // 难点，如果获取最初的价格
         var price = obj.parent().parent().siblings('.p-price').text().slice(1)
         console.log(price,num);
        //  正常计算在num = 9 时，会出现浮点问题 
         var psum = '￥' + price * 10 * num / 10
         console.log(psum);
         obj.parent().parent().siblings('.p-sum').text(psum)
    }

    //4, 商品总计
    function priceSum() {
        // 商品总计
        var sum = 0
        var num = 0
        var priceSum = $('.price-sum em').text().slice(1)
        // 如果单选框是选中状态的话，就加，否则就不加
        $('.j-checkbox').each(function(i,docEle) {
            if ($(docEle).prop('checked')) {
                // console.log($(docEle).parent().siblings('.p-sum').text().slice(1));
                sum += +$(docEle).parent().siblings('.p-sum').text().slice(1)
                num ++
            }
        })
        priceSum = '￥' + sum
        $('.price-sum em').text(priceSum)
        $('.amount-sum em').text(num)
    }

    //5, 类名切换
    bgc()
    function bgc() {
        $('.j-checkbox').each(function(i,docEle){
            if($(docEle).prop('checked')) {
                // console.log(1);
                $(docEle).parent().parent().addClass('check-cart-item')
            }else {
                $(docEle).parent().parent().removeClass('check-cart-item')
            }
        })
    }
});
