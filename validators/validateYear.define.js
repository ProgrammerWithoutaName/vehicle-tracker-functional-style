'use strict';

const fi = require('function-injection');

function validateYear(injected, requirements) {
  let isYear = (/^\d{1,4}$/gi).test(requirements.value);
  injected.assert({
    shouldBeTrue: isYear,
    errorMessage: 'invalid Year'
  });
}

fi({
  implements: 'validateYear',
  function: validateYear,
  dependsOn: 'assert',
  requires: {value:'string'},
});
