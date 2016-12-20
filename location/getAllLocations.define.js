'use strict';
const locationDataStore = require('../store');
const fi = require('function-injection');

// we could do something like this to make it a full framework for building.
buildGetAllLocations.requires = [];
buildGetAllLocations.dependsOn = [];
buildGetAllLocations.cloneOutput = true; // defaults to false;
buildGetAllLocations.returns = fi.model('array').of('location');

function buildGetAllLocations() {
  return getAllLocations;

  function getAllLocations() {
     return locationDataStore;
  }
}


fi.define('getAllLocations', buildGetAllLocations);
