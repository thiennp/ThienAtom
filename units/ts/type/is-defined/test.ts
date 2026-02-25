import { isDefined } from './index';

const arr: (number | null)[] = [1, null, 2];
const defined: number[] = arr.filter(isDefined);
if (defined.length !== 2 || defined[0] !== 1) throw new Error('filter');
console.log('is-defined tests passed');
