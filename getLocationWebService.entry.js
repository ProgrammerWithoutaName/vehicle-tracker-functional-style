'use strict';

const fi = require('function-injection');
const express = require('express'); // this part is handwavey as heck, just going to run with it.

buildGetAllLocationsWebService.dependsOn = ['getLocationsForDisplay', 'buildJsonGetResponse'];
function buildGetAllLocationsWebService(getLocationsForDisplay, buildJsonGetResponse) {
  return getAllLocations;

  function getAllLocations(request, response) {
    getLocationsForDisplay().then(buildJsonGetResponse).then( response => response.send());
  }
}

// entry handles hooking up dependency injection, but does not register the created function, instead it returns the function returned by the function given.
// In this case- getAllLocations defined in buildGetAllLocationsWebService.
const getAllLocations = fi.entry(buildGetAllLocationsWebService);
express.createRoute('/locations', getAllLocations);
