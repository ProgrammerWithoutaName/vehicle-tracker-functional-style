'use strict';

const fi = require('function-injection');

fi.model({
  defines: 'vehicle',
  modelDefinition: {
    make: 'string',
    model: 'string',
    vin : fi.model('vin'), // either a string, or fi.model should be valid. fi.model returns the ability to link deeper
    year: 'year',
    locationId: fi.model('location').$field('id')// this lets automatic mapping get defined. now anything that takes a vehicle.locationId also takes location.id, or a location.
  }
});
