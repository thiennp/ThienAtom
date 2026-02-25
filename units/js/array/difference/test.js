const difference = require('./index.js');
const r = difference([1, 2, 3], [2]);
if (r.length !== 2 || r[0] !== 1 || r[1] !== 3) throw new Error('diff');
console.log('difference tests passed');
