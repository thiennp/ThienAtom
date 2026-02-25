const unique = require('./index.js');
const r = unique([1, 2, 1, 3, 2]);
if (r.length !== 3 || r[0] !== 1) throw new Error('unique');
console.log('unique tests passed');
