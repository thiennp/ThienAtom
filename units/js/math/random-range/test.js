const randomRange = require('./index.js');
for (let i = 0; i < 20; i++) {
  const r = randomRange(1, 10);
  if (r < 1 || r >= 10) throw new Error('out of range');
}
console.log('random-range tests passed');
