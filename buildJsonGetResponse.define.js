'use strict';

const fi = require('function-injection');

buildBuildJsonGetResponse.dependsOn = [];
buildBuildJsonGetResponse.requires = ['response', 'object'];
buildBuildJsonGetResponse.returns = 'response';

// don't clone anything, this method has side effects to account
// for working with an existing system that needs to maintain a reference to an object.
buildBuildJsonGetResponse.cloneInput = false;
buildBuildJsonGetResponse.cloneOutput = false;

function buildBuildJsonGetResponse() {
  function buildBuildJsonGetResponse(response, data) {
    response.status = 200;
    response.data = data;
    return response;
  }
}
