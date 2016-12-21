'use strict';

const fi = require('function-injection');

function validateLocationType(injected, requirements) {
  injected.getLocationTypes().then( (locationTypes) => {
    let valueIsInBaseType = baseType.valueList.includes(requirements.value);
    injected.assert(valueIsInBaseType, 'value is not valid');
  });
}

fi({
  implements: 'validateLocationType',
  function: validateLocationType,
  dependsOn: ['getLocationTypes', 'assert'],
  requires: { value: 'string' } // we can pass in an Object, where the key will be the key of the value given in requirements, and the value is the model
});
