'use strict';

const fi = require('function-injection');

fi.model('vehicle', {
  make: 'string',
  model: 'string',
  vin : fi.model('vin'), // either a string, or fi.model should be valid. fi.model returns the ability to link deeper
  year: 'year',
  locationId: fi.model('location').id // this lets automatic mapping get defined. now anything that takes a vehicle.locationId also takes location.id, or a location. 
});
// use case: fi.model returns fi's model definition, which can be used for mapping.
// can also define a model if second argument given
// can also be used to get a validation for a full model., so for model validation:
// myFunctionBuilder.dependsOn = [ fi.model('modelName').validate ]
