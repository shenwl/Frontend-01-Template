# 每周总结可以写在这里

## 完成一篇本周的学习总结
- 编程语言通识：https://www.yuque.com/shenwl/twpxu2/bdts14
- JS词法、类型：https://www.yuque.com/shenwl/twpxu2/ured0b

## 编程题
1. 写一个正则表达式 匹配所有 Number 直接量
- parseNumber.js
```javascript
function parseNumber(str) {
    const reg = /(0x[0-9|a-f]+)|(0o[0-7]+)|(0b[0-1]+)|([0-9][0-9]+)|([\\.|0\\.][0-9]+)/g;
    return str.match(reg);
}
```

2. 写一个 UTF-8 Encoding 的函数
- encodeUtf8.js
```javascript
function encodeUtf8(source) {
    // 实在不想下面那样自己写一遍 =。=
    // https://gist.github.com/joni/3760795
    const encoder = new TextEncoder('utf8');
    return encoder.encode(source);
}
```

3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
- parseString.js
```javascript
function parseString(source) {
    const reg = /(".+")|('.+')/g;
    return source.match(reg);
}
```