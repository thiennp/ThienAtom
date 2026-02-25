import { noop } from './index';
if (noop() !== undefined) throw new Error('noop');
console.log('noop tests passed');
