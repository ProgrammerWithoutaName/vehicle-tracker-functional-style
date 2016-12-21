'use strict';

const fi = require('function-injection');

fi.model({
  defines: 'locationType',
  test: 'validateLocationType',
  modelDefinition: 'string'
});
