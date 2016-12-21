'use strict';

const fi = require('function-injection');

fi.model({
  defines: 'locationTypes',
  isSpecialized: true,
  modelDefinition: {
    baseType: 'type'
  }
});
