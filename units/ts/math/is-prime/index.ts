/**
 * Returns true iff n is prime. Complexity: O(sqrt(n)).
 */
export function isPrime(n: number): boolean {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) return false;
  }
  return true;
}
