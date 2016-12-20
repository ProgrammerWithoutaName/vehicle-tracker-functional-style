'use strict';
 const fi = require('function-injection');

buildGetLocationsForDisplay.dependsOn = ['getAllLocations', 'applyVehicleCount'];
function buildGetLocationsForDisplay(getAllLocations, applyVehicleCount) {

  function getLocationsForDisplay() {
    // might be a better way to handle array outputs...
    return getAllLocations().thenForEach(applyVehicleCount);
  }
}
