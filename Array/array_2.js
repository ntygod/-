// 请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

function replaceSpace(str)
{
    // 简单正则匹配
    var exg = / /g;
    return str.replace(exg,'%20');
}
