import { assertDefined } from './index';

const a: number | undefined = 1;
assertDefined(a);
const _: number = a;
let threw = false;
try {
  assertDefined(undefined);
} catch {
  threw = true;
}
if (!threw) throw new Error('assert');
console.log('assert-defined tests passed');
