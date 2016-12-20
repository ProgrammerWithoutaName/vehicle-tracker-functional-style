'use strict';

const fi = require('function-injection');

// each model should only be one level deep. 
fi.model('location', { id : 'string' });
