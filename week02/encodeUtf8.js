/**
 * UTF-8 Encoding
 * @param {str} source 源码
 * @return {array} UTF8Array
 */
function encodeUtf8(source) {
    // 实在不想下面那样自己写一遍 =。=
    // https://gist.github.com/joni/3760795
    const encoder = new TextEncoder('utf8');
    return encoder.encode(source);
}

module.exports = encodeUtf8;