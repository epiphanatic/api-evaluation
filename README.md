# API Evaluation

## Overview

This is a simple application that transforms XML data from a static API into JSON data. The application is written in Node.js using a Firebase Cloud Function.

This was chosen due to the fact that 1) it is a simple application with a simple response and no need to process large amounts of data or to hold state, 2) it would be free for up to ~150 million requests per month and also cheaper than other platforms beyond that (where the latter is the reason for choosing Firebase / Google specifically in this instance), and 3) this setup is easy to recreate.

See [Scaling considerations](#scaling-considerations) for more information.

## Installation

In order to make a request and response to the API there is no need to install anything.

However, if you wish to run the [tests](#testing) then you will need to install the dependencies using `npm install`.

Or, if you wish to completely recreate the application then you will need to create a Firebase project that you plan on linking to the application. Go to the [Firebase console](https://console.firebase.google.com/) to do so. You will also need to ensure that you are on the Blaze plan (pay as you go) as this is required to use next gen cloud functions and make requests to external APIs. In the console click on "Functions" and then "Get started" and you will be prompted to do enable billing and upgrade to the Blaze plan.

Then you will need to install the Firebase CLI locally in a terminal using `npm install -g firebase-tools`. Then in the directory on your computer where you have this source code stored, run `firebase init` to initialise cloud functions and link to your project. During the init prompts,choose Functions only with spacebar when prompted, then use an existing project (the one you just created), and use TypeScript as the language. You can then install the dependencies when prompted or run `npm install` afterward.

If you enforced linting errors but then decide that you wish you had not done that when deploying, you can comment out "google" in the "extends" array in the .eslintrc.json file as well as quotes: ['error', 'double'] in the same file.

See [Firebase documentation](https://firebase.google.com/docs/functions/get-started) for more information on any of the above.

Note that at some point during the above process you will be prompted to log into your Google account.

See [Deployment](#deployment) for more information on how to deploy the application.

## Usage

### Authentication

Given that the evaluation asks for an application to process a static API and not to create a frontend client, there is no authentication. However, if this were a real world application with a client then I would use Firebase Authentication to authenticate users in the client and this can then be enforced in this application on the incoming request to the functions.

### Making a request

The API can be accessed at the following endpoint which meets the specifications outlined in `openapi-companies.yaml`:

```
https://us-central1-mwnz-evaluation.cloudfunctions.net/v1
```

The API requires a company ID to be passed in the URL. For example, to get the data for company 1, make a request to the following URL:

```
https://us-central1-mwnz-evaluation.cloudfunctions.net/v1?id=1
```

If the id is not set, is in some other format (eg "1"), or is not within the range of company ids (1-2), then the API will return a 404 error in JSON format as outlined in the spec.

If is properly set and is within the range of company ids (1-2) then the API will return the data for that company in JSON format as outlined in the spec.

## Testing

To run the tests, run `npm run test` in a terminal in the directory where you have this source code stored.

## Deployment

If not recreating the application then there is nothing to do here.

However, if doing so, then you will need to deploy the application to Firebase. To do so, run `firebase deploy --only functions` in a terminal in the directory where you have this source code stored.

After this is complete you can see the endpoints listed in Firebase console under Functions. This is where your browser should point to access the API.

## Scaling considerations

This application is deployed as Firebase Cloud Functions, which are (by default) automatically scaled to meet demand. The application is also stateless, so it can be scaled horizontally. As the application stands, there is no known reason to deploy it in a different way ie as a containerised application on an instance (for example). However, if it grew in complexity and/or processing time then it may be worth revisiting this decision.

## Production considerations

The best way to separate production and development environments is to use separate Firebase projects. This is because the Firebase CLI is linked to a specific project and so it is easier to keep the two separate. This also means that the production environment can be scaled independently of the development environment.

You can easily switch between projects using `firebase use <project_id>` in a terminal in the directory where you have this source code stored.
