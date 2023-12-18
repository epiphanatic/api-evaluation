export interface JSONData {
  id: number;
  name: string;
  description: string;
}

export interface JSONError {
  error: string;
  error_description: string;
}

// when XML is parsed with xml2js it has the following shape which leads to the
//  interfaces below
//   {
//     "Data": {
//       "id": [
//         "1"
//       ],
//       "name": [
//         "MWNZ"
//       ],
//       "description": [
//         "..is awesome"
//       ]
//     }
//   }

export interface XmlParsedData {
  Data: XmlParsedProperties;
}

export interface XmlParsedProperties {
  id: Array<string>;
  name: Array<string>;
  description: Array<string>;
}
