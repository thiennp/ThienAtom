import { last } from './index';
if (last([1, 2, 3]) !== 3) throw new Error('last');
console.log('last tests passed');
