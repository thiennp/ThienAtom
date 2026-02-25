import { isPlainObject } from './index';
if (!isPlainObject({})) throw new Error('plain');
if (isPlainObject([])) throw new Error('array');
if (isPlainObject(null)) throw new Error('null');
console.log('is-plain-object tests passed');
