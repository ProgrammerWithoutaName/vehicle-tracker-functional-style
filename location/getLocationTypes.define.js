'use strict';
const fi = require('function-injection');

// we could do something like this to make it a full framework for building.
buildGetLocationTypes.dependsOn = ['buildTypeModel'];
buildGetLocationTypes.canCache = true; // defaults to false;
buildGetLocationTypes.cloneOutput = true; // defaults to false;
buildGetLocationTypes.returns = 'locationTypes';

const locationTypes = {
  branch: 'branch',
  distributionCenter: 'distribution_center'
};

function buildGetLocationTypes(buildTypeModel) {
  return getLocationTypes;

  function getLocationTypes() {
     return buildTypeModel(locationTypes);
  }
}


fi.define('getLocationTypes', buildGetLocationTypes);
