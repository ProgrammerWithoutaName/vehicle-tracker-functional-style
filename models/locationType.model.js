'use strict';

const fi = require('function-injection');

fi.model({
  defines: 'locationType',
  isSpecialized: true,
  modelDefinition: {
    baseType: 'string',
    test: 'validateLocationType'
  }
});
