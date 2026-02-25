const flattenShallow = require('./index.js');
const r = flattenShallow([1, [2, 3], 4]);
if (r.length !== 4 || r[1] !== 2) throw new Error('flatten');
console.log('flatten-shallow tests passed');
