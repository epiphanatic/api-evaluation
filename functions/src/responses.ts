import * as functions from 'firebase-functions';
import { JSONData } from './interfaces';
import { JSON_ERROR } from './constants';

export function successResponse({
  response,
  jsonData,
}: {
  response: functions.Response<any>;
  jsonData: JSONData;
}): functions.Response<any> {
  response.header('Content-Type', 'application/json');

  return response.status(200).send(jsonData);
}

export function errorResponse({
  response,
}: {
  response: functions.Response<any>;
}): functions.Response<any> {
  response.header('Content-Type', 'application/json');

  return response.status(404).send(JSON_ERROR);
}
