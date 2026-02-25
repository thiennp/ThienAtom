const isOdd = require('./index.js');
if (!isOdd(3)) throw new Error('odd');
if (isOdd(2)) throw new Error('even');
console.log('is-odd tests passed');
