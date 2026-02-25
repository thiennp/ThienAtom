const chunk = require('./index.js');
const r = chunk([1, 2, 3, 4], 2);
if (r.length !== 2 || r[0][0] !== 1 || r[1][0] !== 3) throw new Error('chunk');
console.log('chunk tests passed');
