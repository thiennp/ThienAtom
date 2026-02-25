import { coalesce } from './index';
if (coalesce(null, undefined, 1) !== 1) throw new Error('coalesce');
console.log('coalesce tests passed');
