'use strict';

const fi = require('function-injection');

function buildTypeModel(injected, requirements) {
  return {
    value: requirements.typeModelValues,
    valueList: Object.values(requirements.typeModelValues)
  };
}

fi({
  implements: 'buildTypeModel',
  function: buildTypeModel,
  requires: {typeModelValues: 'object'},
  returns: 'type'
});
