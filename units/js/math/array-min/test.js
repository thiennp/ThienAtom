const arrayMin = require('./index.js');
if (arrayMin([3, 1, 4]) !== 1) throw new Error('min');
if (arrayMin([5]) !== 5) throw new Error('single');
console.log('array-min tests passed');
