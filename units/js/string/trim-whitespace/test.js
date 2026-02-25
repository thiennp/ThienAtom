const trimWhitespace = require('./index.js');
if (trimWhitespace('  a  ') !== 'a') throw new Error('trim');
console.log('trim-whitespace tests passed');
