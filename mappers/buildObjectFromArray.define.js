'use strict';

const fi = require('function-injection');

function buildObjectFromArray(injected, requirements) {
  let valueObject = {};
  requirements.value.forEach(item => valueObject[item]: item)
  return valueObject;
}

fi({
  implements: 'buildObjectFromArray',
  function: buildObjectFromArray,
  requires: { value: 'array' },
  returns: 'object'
});
