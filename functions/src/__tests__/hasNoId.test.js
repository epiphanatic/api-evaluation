import { hasNoId } from '../utils';

describe('Utils', () => {
  describe('hasNoId', () => {
    test('returns true and sends error response when companyId is falsy', () => {
      const mockResponse = {
        send: jest.fn(),
        header: jest.fn(),
        status: jest.fn().mockReturnThis(), // to allow chaining
      };

      const output = hasNoId(null, mockResponse);
      expect(output).toBe(true);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    test('returns false when companyId is truthy', () => {
      const mockResponse = {
        send: jest.fn(),
        header: jest.fn(),
        status: jest.fn().mockReturnThis(), // to allow chaining
      };

      const output = hasNoId('123', mockResponse);
      expect(output).toBe(false);
      expect(mockResponse.send).not.toHaveBeenCalled();
    });
  });
});
