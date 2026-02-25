/**
 * Factorial n!. Complexity: O(n).
 */
export function factorial(n: number): number {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
