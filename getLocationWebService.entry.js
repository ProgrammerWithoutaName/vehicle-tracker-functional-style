'use strict';

const fi = require('function-injection');
const express = require('express'); // this part is handwavey as heck, just going to run with it.

function buildGetAllLocationsWebService(injected) {
  return getAllLocations;

  function getAllLocations(request, response) {
    injected.getLocationsForDisplay().then(injected.buildJsonGetResponse).then( response => response.send());
  }
}

// entry handles hooking up dependency injection, but does not register the created function, instead it returns the function returned by the function given.
// In this case- getAllLocations defined in buildGetAllLocationsWebService.
const buildGetAllLocations = fi.entry({
  dependsOn: ['getLocationsForDisplay', 'buildJsonGetResponse'],
  function: buildGetAllLocationsWebService
});

const getAllLocations = buildGetAllLocations();
express.createRoute('/locations', getAllLocations);
