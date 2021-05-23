const url = require('url');
let parseUrl = 'http://www.google.com/?q=node.js';
let urlObj = url.parse(parseUrl);
console.log(urlObj);