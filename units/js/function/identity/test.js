const identity = require('./index.js');
if (identity(42) !== 42) throw new Error('identity');
console.log('identity tests passed');
