const isUrl = require('./index.js');
if (!isUrl('https://example.com')) throw new Error('url');
if (isUrl('not a url')) throw new Error('not');
console.log('is-url tests passed');
