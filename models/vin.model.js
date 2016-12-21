'use strict';

const fi = require('function-injection');

fi.model({
  defines: 'vin',
  test: 'validateVin',
  modelDefinition: 'string'
});
