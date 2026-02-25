/**
 * Promise that resolves after ms. Complexity: O(1).
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
