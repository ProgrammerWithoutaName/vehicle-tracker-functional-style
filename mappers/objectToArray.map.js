'use strict';

const fi = require('function-injection');

// when auto-mapping can't be figured out.
fi.map({
  from: 'array',
  to: 'object',
  map: 'buildObjectFromArray'
});
