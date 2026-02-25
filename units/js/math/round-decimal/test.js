const roundDecimal = require('./index.js');
if (roundDecimal(1.235, 2) !== 1.24) throw new Error('round');
if (roundDecimal(1.234, 2) !== 1.23) throw new Error('round2');
console.log('round-decimal tests passed');
