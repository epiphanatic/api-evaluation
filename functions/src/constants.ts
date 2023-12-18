import { JSONError } from './interfaces';

// set an error object for any 404
export const JSON_ERROR: JSONError = {
  error: '404',
  error_description: 'Not Found',
};
