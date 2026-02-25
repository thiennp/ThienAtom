const isEven = require('./index.js');
if (!isEven(2)) throw new Error('even');
if (isEven(3)) throw new Error('odd');
console.log('is-even tests passed');
