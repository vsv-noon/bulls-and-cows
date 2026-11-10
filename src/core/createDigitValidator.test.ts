import { describe, it, expect } from 'vitest';
import { createDigitValidator } from './createDigitValidator';

describe('createDigitValidator', () => {
  it('should return a function', () => {
    const validate = createDigitValidator(10);
    expect(typeof validate).toBe('function');
  });

  describe('Decimal system (base: 10', () => {
    it('should return true for valid digits (0-9)', () => {
      const isDecimal = createDigitValidator(10);
      expect(isDecimal('0')).toBe(true);
      expect(isDecimal('5')).toBe(true);
      expect(isDecimal('9')).toBe(true);
    });

    it('should return false for letters', () => {
      const isDecimal = createDigitValidator(10);
      expect(isDecimal('a')).toBe(false);
      expect(isDecimal('F')).toBe(false);
    });
  });

  describe('Binary system (base:2)', () => {
    it('should return true for 0 and 1', () => {
      const isBinary = createDigitValidator(2);
      expect(isBinary('0')).toBe(true);
      expect(isBinary('1')).toBe(true);
    });

    it('should return false for digits out of range (2-9)', () => {
      const isBinary = createDigitValidator(2);
      expect(isBinary('2')).toBe(false);
      expect(isBinary('9')).toBe(false);
    });
  });

  describe('Octal system (base: 8', () => {
    it('should return true for valid digits (0-7)', () => {
      const isOctal = createDigitValidator(8);
      expect(isOctal('0')).toBe(true);
      expect(isOctal('7')).toBe(true);
    });

    it('should return false for digits out of range (8-9) and letters', () => {
      const isOctal = createDigitValidator(8);
      expect(isOctal('8')).toBe(false);
      expect(isOctal('a')).toBe(false);
    });
  });

  describe('Hexadecimal system (base: 16', () => {
    it('should return true for digits (0-9) and letters (a-f)', () => {
      const isHex = createDigitValidator(16);
      expect(isHex('0')).toBe(true);
      expect(isHex('9')).toBe(true);
      expect(isHex('a')).toBe(true);
      expect(isHex('f')).toBe(true);
      expect(isHex('A')).toBe(true);
      expect(isHex('F')).toBe(true);
    });

    it('should return false for letters out of range (g-z)', () => {
      const isHex = createDigitValidator(16);
      expect(isHex('g')).toBe(false);
      expect(isHex('Z')).toBe(false);
    });
  });

  describe('Error handling (Argument validation)', () => {
    it('should throw an error if base is not specified (equals 0)', () => {
      const invalidValidator = createDigitValidator(0);
      expect(() => invalidValidator('1')).toThrow(
        'Base must be specified and char must be a valid digit'
      );
    });

    it('should throw an error if an invalid character is passed (not 0-9, a-z)', () => {
      const isDecimal = createDigitValidator(10);
      expect(() => isDecimal('-')).toThrow(
        'Base must be specified and char must be a valid digit'
      );
      expect(() => isDecimal(' ')).toThrow(
        'Base must be specified and char must be a valid digit'
      );
      expect(() => isDecimal('а')).toThrow(
        'Base must be specified and char must be a valid digit'
      ); // Cyrillic 'a'
    });
  });
});
