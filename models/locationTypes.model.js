'use strict';

const fi = require('function-injection');

buildLocationTypes.isPrimary = true;
function buildLocationTypes() {
  return { type: 'type' };
};

fi.model('locationTypes', buildLocationTypes);
