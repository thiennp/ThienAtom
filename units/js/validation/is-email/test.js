const isEmail = require('./index.js');
if (!isEmail('a@b.co')) throw new Error('valid');
if (isEmail('invalid')) throw new Error('invalid');
console.log('is-email tests passed');
