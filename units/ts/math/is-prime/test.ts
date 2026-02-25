import { isPrime } from './index';
if (!isPrime(7) || isPrime(4)) throw new Error('is-prime');
console.log('is-prime tests passed');
