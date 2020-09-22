// 格式化时间
function dateFormat(dateStr) {
    let date = new Date(dateStr);
    let y = date.getFullYear();
    let M =padZero(date.getMonth() + 1);
    let d = padZero(date.getDate())
    let hh = padZero(date.getHours())
    let mi = padZero(date.getMinutes())
    let ss = padZero(date.getSeconds())
    return `${y}-${M}-${d}  ${hh}:${mi}:${ss}`
}
function padZero(n) {
    return n > 9 ? n : '0' + n
}

module.exports = {
    dateFormat,
}