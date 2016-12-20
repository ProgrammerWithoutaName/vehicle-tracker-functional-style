'use strict';
const fi = require('function-injection');
let addVehicleCount;

buildApplyVehicleCount.requires = ['location'];
buildApplyVehicleCount.dependsOn = {getVehicles: fi.with('location')}; //takes an array or an object. the object contains definitions
buildApplyVehicleCount.returns = 'location';

function buildApplyVehicleCount(getVehicles) {
  return applyVehicleCount;

  function applyVehicleCount(location) {
    return getVehicles(location).then( (results) => {
      location.vehicleCount = results.vehicles.length;
      return { location };
    });
  }
}

functionInjection.define('applyVehicleCount', buildApplyVehicleCount);
