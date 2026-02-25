const last = require('./index.js');
if (last([1, 2, 3]) !== 3) throw new Error('last');
if (last([]) !== undefined) throw new Error('empty');
console.log('last tests passed');
