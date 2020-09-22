// 转义字符
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g,(matech) => {
        switch (matech) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

// 还原HTMl的方法
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g,(matech) => {
        switch (matech) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '<'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}
module.exports = {
    htmlEscape,
    htmlUnEscape
}