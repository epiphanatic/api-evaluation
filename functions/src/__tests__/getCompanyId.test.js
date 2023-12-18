import { getCompanyId } from '../utils';

describe('Utils', () => {
  describe('getCompanyId', () => {
    test('retrieves the company ID from the request query', () => {
      const mockRequest = {
        query: {
          id: '123',
        },
      };

      const output = getCompanyId(mockRequest);
      expect(output).toBe('123');
    });
  });
});
