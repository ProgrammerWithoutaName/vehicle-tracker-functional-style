'use strict';

const fi = require('function-injection');

function validateType(injected, requirements) {
  let valueIsInBaseType = requirements.baseType.valueList.includes(requirements.value);
  injected.assert({
    shouldBeTrue: valueIsInBaseType,
    errorMessage: 'value is not valid'
  });
}

fi({
  implements: 'validateType',
  function: validateType,
  dependsOn: 'assert',
  requires: {
    baseType: 'type',
    value: '*' // * means anything
  }
});
