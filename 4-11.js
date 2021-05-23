//将对象序列化为一个查询字符串
const querystring = require('querystring');
let obj = {
	keyWord: 'node.js',
	name: 'huyuyi'
};
let str = querystring.stringify(obj);
console.log(str);