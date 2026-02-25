import { clamp } from './index';
if (clamp(5, 0, 10) !== 5 || clamp(-1, 0, 10) !== 0) throw new Error('clamp');
console.log('clamp tests passed');
