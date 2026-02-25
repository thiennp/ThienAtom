const capitalize = require('./index.js');
if (capitalize('hello') !== 'Hello') throw new Error('cap');
console.log('capitalize tests passed');
