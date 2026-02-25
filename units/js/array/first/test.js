const first = require('./index.js');
if (first([1, 2, 3]) !== 1) throw new Error('first');
console.log('first tests passed');
