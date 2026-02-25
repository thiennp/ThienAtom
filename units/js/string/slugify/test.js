const slugify = require('./index.js');
if (slugify('Hello World') !== 'hello-world') throw new Error('basic');
if (slugify('  a  b  ') !== 'a-b') throw new Error('trim');
console.log('slugify tests passed');
