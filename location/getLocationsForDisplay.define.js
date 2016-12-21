'use strict';
 const fi = require('function-injection');

function getLocationsForDisplay(injected) {
  return injected.getAllLocations().then(locations => locations.forEach(injected.applyVehicleCount));
}

fi({
  implements: 'getLocationsForDisplay',
  function: getLocationsForDisplay,
  dependsOn: ['getAllLocations', 'applyVehicleCount'],
  returns: fi.ennumerable('location')
});
