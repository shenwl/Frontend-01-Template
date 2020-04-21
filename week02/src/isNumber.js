function isNumber(str) {
    // 浮点数，二进制/八进制/十进制/十六进制整数
    // 十六进制: 0x - 1-9|a-f - 0-9|a-f+
    // 八进制:  0o - 1-7 - 0-7+
    // 二进制:  0b - 1 - 0-1+
    // 十进制:  0-9 + 0-9+
    // 浮点数:  0\.｜\. + 0-9+
    const reg = /(^0x[0-9|a-f]+$)|(^0o[0-7]+$)|(^0b[0-1]+$)(^[0-9][0-9]+^)(^[\\.|0\\.][0-9]+$)/;
    // const reg = /(^0x[1-9|a-f][0-9|a-f]+$)|(^0o[1-7][0-7]+$)|(^0b1[0-1]+$)(^[1-9][0-9]+^)(^[\\.|0\\.][0-9]+$)/;

    // 打印转化Number的值
    try {
        console.log('Number is: ' + Number(str));
    } catch(e) {
        console.error('Number非法: ' + str);
    }

    return reg.test(str);
}

console.log(isNumber('0x008f') === true)
console.log(isNumber('0x8f') === true)
console.log(isNumber('0o81') === false)
console.log(isNumber('0o71') === true)
console.log(isNumber('0b1001') === true)
console.log(isNumber('.01') === true)
console.log(isNumber('0.1') === true)
console.log(isNumber('10') === true)