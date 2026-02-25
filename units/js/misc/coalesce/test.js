const coalesce = require('./index.js');
if (coalesce(null, undefined, 1) !== 1) throw new Error('coalesce');
console.log('coalesce tests passed');
