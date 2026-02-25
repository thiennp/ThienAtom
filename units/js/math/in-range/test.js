const inRange = require('./index.js');
if (!inRange(2, 0, 5)) throw new Error('in');
if (inRange(5, 0, 5)) throw new Error('excl');
if (!inRange(3, 5)) throw new Error('2arg');
console.log('in-range tests passed');
