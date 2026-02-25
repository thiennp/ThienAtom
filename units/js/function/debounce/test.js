const debounce = require('./index.js');
let c = 0;
const d = debounce(function () { c++; }, 20);
d(); d(); d();
setTimeout(function () {
  if (c !== 1) throw new Error('debounce');
  console.log('debounce tests passed');
}, 50);
