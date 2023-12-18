import * as functions from 'firebase-functions';

import {
  convertCompanyIdToNumber,
  getCompanyId,
  hasNoId,
  idNotFound,
} from './utils';
import { makeApiCall } from './http_service';

export const v1 = functions.https.onRequest((request, response) => {
  // extract company id from request
  const companyId = getCompanyId(request);

  // handle no id passed in
  if (hasNoId(companyId, response)) {
    return;
  }

  // convert to number / integer
  const companyIdNumber = convertCompanyIdToNumber(String(companyId));

  // handle id not found
  if (idNotFound(companyIdNumber, response)) {
    return;
  }

  // make the call, respond, and handle any errors
  makeApiCall(companyIdNumber, response);
});
