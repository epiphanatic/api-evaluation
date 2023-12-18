import { convertCompanyIdToNumber } from '../utils';

describe('Utils', () => {
  describe('convertCompanyIdToNumber', () => {
    test('converts a string to a number correctly', () => {
      const input = '123';
      const output = convertCompanyIdToNumber(input);
      expect(output).toBe(123);
    });

    test('returns NaN for invalid input', () => {
      const input = 'invalid';
      const output = convertCompanyIdToNumber(input);
      expect(output).toBeNaN();
    });
  });
});
