const util = require('util');

let obj = {
	keyWord: 'node.js',
	name: 'huyuyi'
};
let str = util.inspect(obj);
console.log(str);