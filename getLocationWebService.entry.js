'use strict';

const fi = require('function-injection');
const express = require('express'); // this part is handwavey as heck, just going to run with it.

function getAllLocationsWebService(injected, request, response) {
  injected.getLocationsForDisplay()
    .then(locations => injected.buildJsonGetResponse({response, data: locations}))
    .then( response => response.send()); // Note the handwavey comment above, not sure this is how express routes work. Just making an example here.
}

// entry handles hooking up dependency injection, but does not register the created function, instead it returns the function returned by the function given.
// In this case- getAllLocations defined in buildGetAllLocationsWebService.
const getAllLocations = fi.entry({
  dependsOn: ['getLocationsForDisplay', 'buildJsonGetResponse'],
  function: getAllLocationsWebService
});

//getAllLocations is called as getAllLocations(request, response). the function given to fi.entry
// is wrapped so that the first argument will be inserted at the beginning of the argument list.
express.createRoute('/locations', getAllLocations);
