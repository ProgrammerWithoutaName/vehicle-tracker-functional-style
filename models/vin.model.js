'use strict';

const fi = require('function-injection');

buildVinModel.isPrimary = true; // defaults to false;

function buildVinPrimaryModel() {
  return {
    type: 'string',
    test: 'validateVin'
  }
}

fi.model('vin', buildVinModel);
