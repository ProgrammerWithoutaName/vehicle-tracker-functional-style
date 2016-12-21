'use strict';
const locationDataStore = require('../store');
const fi = require('function-injection');

function getAllLocations() {
   return locationDataStore;
}

fi({
  implements: 'getAllLocations'
  function: getAllLocations,
  cloneOutput: true,
  returns: fi.ennumerable('location') // saying it returns an array of location
});
