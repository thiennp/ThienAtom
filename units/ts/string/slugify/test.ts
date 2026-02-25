import { slugify } from './index';
if (slugify('Hello World') !== 'hello-world') throw new Error('slugify');
console.log('slugify tests passed');
