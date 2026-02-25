/**
 * Exhaustive check for discriminated unions. Complexity: O(1).
 * Call in default branch of switch; TypeScript errors if a case is missing.
 */
export function assertNever(x: never, msg?: string): never {
  throw new Error(msg ?? `Unexpected value: ${String(x)}`);
}
