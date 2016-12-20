'use strict';

const fi = require('function-injection');

buildBuildObjectFromArray.dependsOn = [];
buildBuildObjectFromArray.requires = ['array'];
buildBuildObjectFromArray.returns = 'object';

function buildBuildObjectFromArray() {
  function buildObjectFromArray(valueArray) {
    let valueObject = {};
    valueArray.forEach(item => valueObject[item]: item)
    return valueObject;
  }
}

fi.define('buildObjectFromArray', buildBuildObjectFromArray);
