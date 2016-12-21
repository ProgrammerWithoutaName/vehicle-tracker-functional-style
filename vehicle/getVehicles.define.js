'use strict';
const fi = require('function-injection');
const vehicleDataStore = require('./vehicleDataStore');

function getVehicles(injected, requirements) {
  return vehicleDataStore.filter(vehicle => vehicle.locationId === requirements.locationId);
}

fi({
  implements: 'getVehicles',
  function: getVehicles
  requires: fi.model('vehicle').locationId, // you could say it requires a string, but this allows for auto-mapping.
  cloneInput: true, //defaults to true, but showing here that this should be an option available
  cloneOutput: true,
  returns: fi.ennumerable('vehicle')
});
