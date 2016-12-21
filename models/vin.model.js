'use strict';

const fi = require('function-injection');

fi.model({
  defines: 'vin',
  isSpecialized: true,
  modelDefinition: {
    baseType: 'string',
    test: 'validateVin'
  }
});
