import { assertNever } from './index';

type Tag = 'a' | 'b';
function run(t: Tag): number {
  switch (t) {
    case 'a': return 1;
    case 'b': return 2;
    default: return assertNever(t);
  }
}
if (run('a') !== 1) throw new Error('switch');
console.log('assert-never tests passed');
