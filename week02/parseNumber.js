/**
 * 匹配源码中所有 Number 直接量
 * @param {str} source 源码
 * @return {array<str>} 字符串直接量列表
 */
function parseNumber(source) {
    if(typeof source !== "string") {
        throw new Error("Source is not String!");
    }
    // 浮点数，二进制/八进制/十进制/十六进制整数
    // 十六进制: 0x - 1-9|a-f - 0-9|a-f+
    // 八进制:  0o - 1-7 - 0-7+
    // 二进制:  0b - 1 - 0-1+
    // 十进制:  0-9 + 0-9+
    // 浮点数:  0\.｜\. + 0-9+
    const reg = /(0x[0-9|a-f]+)|(0o[0-7]+)|(0b[0-1]+)|([0-9][0-9]+)|([\\.|0\\.][0-9]+)/g;
    
    return source.match(reg);
}

module.exports = parseNumber;
