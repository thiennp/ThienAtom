import { isArray } from './index';
if (!isArray([])) throw new Error('arr');
if (isArray({})) throw new Error('obj');
console.log('is-array tests passed');
