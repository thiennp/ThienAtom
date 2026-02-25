const sum = require('./index.js');
if (sum([1, 2, 3]) !== 6) throw new Error('sum');
if (sum([]) !== 0) throw new Error('empty');
console.log('sum tests passed');
