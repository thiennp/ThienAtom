const range = require('./index.js');
const r = range(0, 3);
if (r.length !== 3 || r[0] !== 0 || r[2] !== 2) throw new Error('range');
console.log('range tests passed');
