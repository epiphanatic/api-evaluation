import { idNotFound } from '../utils';

describe('Utils', () => {
  describe('idNotFound', () => {
    test('returns true and sends error response when companyIdNumber is not in allowedIds', () => {
      const mockResponse = {
        send: jest.fn(),
        header: jest.fn(),
        status: jest.fn().mockReturnThis(), // to allow chaining
      };

      const output = idNotFound(3, mockResponse);
      expect(output).toBe(true);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    test('returns false when companyIdNumber is in allowedIds', () => {
      const mockResponse = {
        send: jest.fn(),
        header: jest.fn(),
        status: jest.fn().mockReturnThis(), // to allow chaining
      };

      const output = idNotFound(1, mockResponse);
      expect(output).toBe(false);
      expect(mockResponse.send).not.toHaveBeenCalled();
    });
  });
});
