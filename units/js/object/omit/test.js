const omit = require('./index.js');
const r = omit({ a: 1, b: 2, c: 3 }, ['b']);
if (r.a !== 1 || r.c !== 3 || r.b !== undefined) throw new Error('omit');
console.log('omit tests passed');
