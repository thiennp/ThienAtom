import { identity } from './index';
if (identity(42) !== 42) throw new Error('identity');
console.log('identity tests passed');
