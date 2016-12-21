'use strict';

const fi = require('function-injection');

function buildBuildJsonGetResponse(injected, requirements) {
  requirements.response.status = 200;
  requirements.response.data = requirements.data;
  return response;
}

fi({
  implements: 'buildBuildJsonGetResponse',
  function: buildJsonGetResponse,
  requires: {
    response: 'response',
    data: 'object'
  },
  returns: 'response',
  // we can specify to not clone to allow for objects that have to have their references maintained
  // for outside libraries
  cloneOutput: false,
  cloneInput: false
});
