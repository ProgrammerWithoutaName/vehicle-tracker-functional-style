'use strict';

const fi = require('function-injection');

function validateVin(injected, requirements) {
  let hasCorrectCharacters = (/^[a-zA-Z0-9]{19}\d{5}$/gi).test(requirements.value);
  let alphaCount = requirements.value.match(/[a-zA-Z]/gi).length;
  injected.assert({
    shouldBeTrue: hasCorrectCharacters && alphaCount > 7,
    errorMessage: 'invalid VIN'
  });
}

fi({
  implements: 'validateVin',
  function: validateVin
  dependsOn: 'assert', // we can skip using an array if there is only one default object.
  requires: { value: 'string' },
});
