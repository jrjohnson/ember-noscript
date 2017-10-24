/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'configuration-env',
    environment,
    rootURL: '/',
    locationType: 'auto',
    noScript: {
      content: 'noscripty stuff',
      tag: 'specialnoscripttesttag'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
  };

  return ENV;
};
