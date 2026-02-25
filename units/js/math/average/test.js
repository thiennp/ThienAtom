const average = require('./index.js');
if (average([2, 4, 6]) !== 4) throw new Error('avg');
console.log('average tests passed');
