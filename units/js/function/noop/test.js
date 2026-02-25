const noop = require('./index.js');
if (noop() !== undefined) throw new Error('noop');
console.log('noop tests passed');
