'use strict';
const fi = require('function-injection');

function applyVehicleCount(injected, requirements) {
  return injected.getVehicles(requirements.location).then( (results) => {
    requirements.location.vehicleCount = results.vehicles.length;
    return requirements.location;
  });
}

fi({
  implements: 'applyVehicleCount',
  function: applyVehicleCount,
  requires: 'location',
  /* What is happening here is that I'm saying "I want to supply getVehicles with a location", the framework handles the mapping from location to locationId,
   alternate acceptable form: getVehicles: fi.function('getVehicles').with('location'). You would use that form when you wanted to change the name
   so you could, in theory, have -
   dependsOn: {
    getVehiclesUsingLocation: fi.function('getVehicles').with('location'),
    getVehiclesUsingVehicle: fi.function('getVehicles').with('vehicle'),
    getVehicles: 'getVehicles'
  }
  // note: each of the above, in this project, would be automapped to a locationId since the modelDefinition
  // all maps to the same value. You could also create a mapper
  */
  dependsOn: {getVehicles: fi.function('getVehicles').with('location')}
  returns: 'location'
});
