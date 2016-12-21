'use strict';

const fi = require('function-injection');

// string is just a shortcut to fi.model;
fi.model({
  defines: 'type',
  modelDefinition: {
    value: 'object',
    valueList: 'array'
  }
});
