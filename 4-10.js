//将查询字符串反序列化为一个对象
const querystring = require('querystring');
let str = 'keyWord=node.js&name=huyiyi';
let obj = querystring.parse(str);
console.log(obj);