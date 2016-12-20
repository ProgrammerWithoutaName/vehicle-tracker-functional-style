'use strict';
const fi = require('function-injection');
const vehicleDataStore = require('./vehicleDataStore');

// this should be able to be left empty, but defining here to make it obvious that this exists.
buildGetVehicles.dependsOn = [];

// this makes it more clear what to get, but they all go into a mapper. so anything that uses location.id would be valid.
// for encapsulation purposes, I suggest sticking to the model it's based off of, and let the model define what locationId is.
buildGetVehicles.requires = [fi.model('vehicle').locationId];

// this needs fleshed out more.
buildGetVehicles.returns = fi.model('array').of('vehicle');

buildGetVehicles.cloneOutput = true; // defaults to false;
buildGetVehicles.cloneInput = true; // defaults to true;

function buildGetVehicles() {
  return getVehicles;
  function getVehicles(locationId) {
    return vehicleDataStore.filter(vehicle => vehicle.locationId === locationId);
  }
}

fi.define('getVehicles', buildGetVehicles);
