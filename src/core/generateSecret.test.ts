import { describe, expect, it } from 'vitest';
import { generateSecret } from './generateSecret';

describe('generateSecret', () => {
  it('should generate a secret with the specified length', () => {
    const secret = generateSecret(4, 10, () => 0);

    expect(secret).toHaveLength(4);
  });

  it('should generate unique digits', () => {
    const secret = generateSecret(4, 10, () => 0);

    expect(new Set(secret).size).toBe(4);
  });

  it('should preserve leading zeros', () => {
    const secret = generateSecret(4, 10, () => 0);

    expect(secret).toBe('0123');
  });

  it('should generate a binary secret', () => {
    const secret = generateSecret(2, 2, () => 0);

    expect(secret).toBe('01');
  });

  it('should generate an octal secret', () => {
    const secret = generateSecret(4, 8, () => 0);

    expect(secret).toBe('0123');
  });

  it('should generate a hexadecimal secret', () => {
    const secret = generateSecret(4, 16, () => 0);

    expect(secret).toBe('0123');
  });

  it('should generate hexadecimal digits using A-F', () => {
    const secret = generateSecret(16, 16, () => 0);

    expect(secret).toBe('0123456789ABCDEF');
  });

  it('should reject a length less than 1', () => {
    expect(() => generateSecret(0, 10)).toThrow(RangeError);
  });

  it('should reject a length greater than the base', () => {
    expect(() => generateSecret(11, 10)).toThrow(RangeError);
  });

  it('should reject unsupported bases', () => {
    expect(() => generateSecret(4, 3 as 10)).toThrow(RangeError);
  });

  it('should reject a non-integer length', () => {
    expect(() => generateSecret(2.5, 10)).toThrow(RangeError);
  });
});
