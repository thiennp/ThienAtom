import { first } from './index';
if (first([1, 2, 3]) !== 1) throw new Error('first');
console.log('first tests passed');
