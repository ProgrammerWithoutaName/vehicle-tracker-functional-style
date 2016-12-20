'use strict';

const fi = require('function-injection');

buildValidateType.dependsOn = ['assert'];
buildValidateType.requires = ['type', '*'];
function buildValidateType(assert) {
  return validateType;
  function validateType(baseType, value) {
    let valueIsInBaseType = baseType.valueList.includes(value);
    assert(valueIsInBaseType, 'value is not valid');
  }
}

fi.define('validateType', buildValidateType);
