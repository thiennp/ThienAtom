import { isString } from './index';
if (!isString('a')) throw new Error('str');
if (isString(1)) throw new Error('num');
console.log('is-string tests passed');
