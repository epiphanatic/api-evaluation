import * as functions from 'firebase-functions';
import { errorResponse } from './responses';

export function getCompanyId(request: functions.Request) {
  return request.query.id;
}

export function hasNoId(companyId: any, response: functions.Response): boolean {
  // if false, 0, '', null, or undefined send back 404
  if (!companyId) {
    errorResponse({ response });
    return true;
  }
  return false;
}

export function convertCompanyIdToNumber(companyId: string): number {
  const companyIdNumber = parseInt(companyId);
  return companyIdNumber;
}

// this is just a simulation of what would likely be compared with list of ids,
//  database call, etc.

export function idNotFound(
  companyIdNumber: number,
  response: functions.Response
): boolean {
  const allowedIds = [1, 2];

  // if not allowed / not included in allowedIds send back 404
  if (!allowedIds.includes(companyIdNumber)) {
    errorResponse({ response });
    return true;
  }
  return false;
}
