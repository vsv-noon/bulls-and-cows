const DIGITS = '0123456789ABCDEF';

type Random = () => number;

export function generateSecret(
  length: number,
  base: number,
  random: Random = Math.random
): string {
  if (!Number.isInteger(length) || length < 1) {
    throw new RangeError('Length must be a positive integer');
  }

  if (![2, 8, 10, 16].includes(base)) {
    throw new RangeError('Unsupported base');
  }

  if (length > base) {
    throw new RangeError('Length cannot exceed the base');
  }

  const symbols = [...DIGITS.slice(0, base)];

  const selectDigits = (
    available: readonly string[],
    selected: readonly string[]
  ): string => {
    if (selected.length === length) {
      return selected.join('');
    }

    const randomValue = random();

    if (!Number.isFinite(randomValue) || randomValue < 0 || randomValue >= 1) {
      throw new RangeError('Random must return a number between 0 and 1');
    }

    const index = Math.floor(randomValue * available.length);

    const [digit] = available.slice(index, index + 1);

    const remaining = [
      ...available.slice(0, index),
      ...available.slice(index + 1),
    ];

    return selectDigits(remaining, [...selected, digit]);
  };

  return selectDigits(symbols, []);
}
