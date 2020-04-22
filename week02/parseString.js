/**
 * 匹配源码中所有 String 直接量（单引号和双引号）
 * @param {str} source 源码
 * @return {array<str>} 直接量文本列表
 */
function parseString(source) {
    if(typeof source !== "string") {
        throw new Error("Source is not String!");
    }
    const reg = /(".+")|('.+')/g;
    return source.match(reg);
}

module.exports = parseString;