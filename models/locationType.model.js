'use strict';

const fi = require('function-injection');

buildLocationType.isPrimary = true;
function buildLocationType() {
  return {
    type: 'string',
    test: 'validateLocationType'
  };
};

fi.model('locationType', buildLocationType);
