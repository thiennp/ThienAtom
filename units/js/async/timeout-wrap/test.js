const timeoutWrap = require('./index.js');
const fast = Promise.resolve(1);
timeoutWrap(fast, 100).then(function (v) {
  if (v !== 1) throw new Error('value');
  console.log('timeout-wrap tests passed');
});
