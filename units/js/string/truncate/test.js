const truncate = require('./index.js');
if (truncate('hello world', 5) !== 'hello') throw new Error('trunc');
if (truncate('hi', 10) !== 'hi') throw new Error('short');
console.log('truncate tests passed');
