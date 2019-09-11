// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appsyncConfig: {
    url: 'https://w6ehjyw2zffilkdw5eg6lzjiya.appsync-api.us-east-1.amazonaws.com/graphql',
    region: 'us-east-1',
    auth: {
      type: 'API_KEY',
      apiKey: 'da2-6bueh53bjrecpjlp4flgzr53hu'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
