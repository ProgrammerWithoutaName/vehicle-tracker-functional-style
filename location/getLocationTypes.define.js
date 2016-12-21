'use strict';
const fi = require('function-injection');

const locationTypes = {
  branch: 'branch',
  distributionCenter: 'distribution_center'
};

function getLocationTypes(injected) {
   return injected.buildTypeModel({ typeModelValues: locationTypes });
}

// we could do something like this to make it a full framework for building.
fi({
  implements: 'getLocationTypes',
  function: getLocationTypes,
  dependsOn: 'buildTypeModel',
  returns: 'locationTypes',
  canCache: true,
  cloneOutput: true
});
