// this is for using v2 if one were so inclinded.
// however, keep in mind that gcp artifact registry must be enabled, a service account configured, etc.,
//  which is beyond the scope of this evaluation.
/**
 * Import function triggers from their respective submodules:
 *
 * import {onRequest} from "firebase-functions/v2/https";
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//
import * as functions from 'firebase-functions';

export const helloWorld2 = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});
