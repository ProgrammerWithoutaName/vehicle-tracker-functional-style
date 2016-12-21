'use strict';

const fi = require('function-injection');

function buildTypeModel(injected, requirements) {
  return {
    value: requirements.typesModelValues,
    valueList: Object.values(requirements.typesModelValues)
  };
}

fi({
  implements: 'buildTypeModel',
  function: buildTypeModel,
  requires: {typesModelValues: 'object'},
  returns: 'type'
});
