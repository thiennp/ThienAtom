const repeat = require('./index.js');
if (repeat('a', 3) !== 'aaa') throw new Error('repeat');
console.log('repeat tests passed');
