$(function () {
    // 1，全新 与全不选
    $(".checkall").change(function () {
        $(".checkall").prop("checked", $(this).prop("checked"));
        // 物品栏的复选框
        $(".j-checkbox").prop("checked", $(this).prop("checked"));
        //
    });
});
