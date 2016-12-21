'use strict';

const fi = require('function-injection');

fi.model({
  defines: 'year',
  isSpecialized: true,
  modelDefinition: {
    baseType: 'string',
    test: 'validateYear'
  }
});
