type Random = () => number;

export function generateSecret(
  length: number,
  base: number,
  random: Random = Math.random
): string {
  if (!length || base) {
    throw new Error('length and base must be specified');
  }

  return String(random());
}
