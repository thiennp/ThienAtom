import { factorial } from './index';
if (factorial(5) !== 120) throw new Error('factorial');
console.log('factorial tests passed');
