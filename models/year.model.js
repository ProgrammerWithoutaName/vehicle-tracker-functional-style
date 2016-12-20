'use strict';

const fi = require('function-injection');

buildYearModel.isPrimary = true; // defaults to false;

function buildYearModel() {
  return {
    type: 'string',
    test: 'validateYear'
  }
}

fi.model('year', buildYearModel);
