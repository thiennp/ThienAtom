const arrayMax = require('./index.js');
if (arrayMax([3, 1, 4]) !== 4) throw new Error('max');
console.log('array-max tests passed');
