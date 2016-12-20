'use strict';

const fi = require('function-injection');

buildValidateLocationType.dependsOn = ['getLocationTypes'];
buildValidateLocationType.requires = ['string'];

function buildValidateLocationType(getLocationTypes) {
  return validateLocationType;
  function validateLocationType(value) {
    getLocationTypes().then( (locationTypes) => {
      let valueIsInBaseType = baseType.valueList.includes(value);
      assert(valueIsInBaseType, 'value is not valid');
    });
  }
}

fi.define('validateLocationType', buildValidateLocationType);
