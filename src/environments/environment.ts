// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_search_url: 'https://www.prevision-meteo.ch/ajax/search?term=',
  api_backend_hostname: 'https://www.prevision-meteo.ch/services/json/',
    api_meteo_france_cities: 'http://www.meteofrance.com/mf3-rpc-portlet/rest/lieu/facet/previsions/search/94370',
    api_meteo_france_prevision: 'http://www.meteofrance.com/previsions-meteo-france/sucy-en-brie/94370'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
