'use strict';

const fi = require('function-injection');

// string is just a shortcut to fi.model;

fi.model('type', {
  value: 'object',
  valueList: 'array'
});
