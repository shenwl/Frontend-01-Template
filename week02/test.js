const parseNumber = require('./parseNumber');
const parseString = require('./parseString');
const encodeUtf8 = require('./encodeUtf8');

// test parseNumber
const sourceCode1 = "0x008f adasd 0x8f 0o81 null 0o71 0b1001 .01 0.1 10 acb";
const numbers = parseNumber(sourceCode1);
// 打印转化Number的值
numbers.forEach(n => {
    console.log(n + ' - ' + Number(n));
});

// test parseString
const sourceCode2 = "'hello world' aaa bbb \"你好\" ccc";
console.log(parseString(sourceCode2));

// test encoding
console.log(encodeUtf8('ac dsadj utf-8  编码'));
