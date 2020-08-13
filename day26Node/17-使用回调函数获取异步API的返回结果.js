function getMsg (callback) {
    setTimeout(function() {
        callback({msg:'hello Node.js'})
    },2000)
}
getMsg(function(msg) {
    console.log(msg);
})