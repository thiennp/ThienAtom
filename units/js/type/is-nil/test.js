const isNil = require('./index.js');
if (!isNil(null) || !isNil(undefined)) throw new Error('nil');
if (isNil(0) || isNil('')) throw new Error('falsy');
console.log('is-nil tests passed');
