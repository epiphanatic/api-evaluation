import * as https from 'https';
import * as xml2js from 'xml2js';
import * as functions from 'firebase-functions';
import { JSONData, XmlParsedData, XmlParsedProperties } from './interfaces';
import { successResponse } from './responses';

export function makeApiCall(
  companyIdNumber: number,
  response: functions.Response
) {
  const serverUrl =
    'https://raw.githubusercontent.com/MiddlewareNewZealand/evaluation-instructions/main/xml-api/';

  // call the requested static api
  https
    .get(`${serverUrl}${companyIdNumber}.xml`, (res) => {
      let rawXmlData = '';

      // A chunk of data has been received.
      res.on('data', (chunk) => {
        rawXmlData += chunk;
      });

      // The whole response has been received.
      res.on('end', () => {
        xml2js.parseString(rawXmlData, function (err, result: XmlParsedData) {
          const rootData: XmlParsedProperties = result.Data;
          const jsonData: JSONData = {
            id: parseInt(rootData.id[0]),
            name: rootData.name[0],
            description: rootData.description[0],
          };
          successResponse({ response, jsonData });
        });
      });
    })
    .on('error', (err) => {
      /**
       * @TODO consider updating yaml spec to include a 500 internal error when
       *  XML API is unreachable or has other errors (or parsing fails above) so that
       *  can be sent to client as well.
       */
    });
}
