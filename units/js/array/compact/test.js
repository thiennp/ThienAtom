const compact = require('./index.js');
const r = compact([0, 1, false, 2, '', 3]);
if (r.length !== 3 || r[0] !== 1) throw new Error('compact');
console.log('compact tests passed');
