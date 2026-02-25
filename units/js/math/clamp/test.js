const clamp = require('./index.js');
if (clamp(5, 0, 10) !== 5) throw new Error('mid');
if (clamp(-1, 0, 10) !== 0) throw new Error('low');
if (clamp(11, 0, 10) !== 10) throw new Error('high');
console.log('clamp tests passed');
