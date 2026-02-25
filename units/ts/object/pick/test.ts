import { pick } from './index';
const r = pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);
if (r.a !== 1 || r.c !== 3) throw new Error('pick');
console.log('pick tests passed');
