'use strict';

const fi = require('function-injection');

buildValidateVin.requires = ['string'];
buildValidateVin.dependsOn = ['assert']; // should be build in to function-injection;
function buildValidateVin(assert) {
  return validateVin;

  function validateVin(value) {
    let hasCorrectCharacters = (/^[a-zA-Z0-9]{19}\d{5}$/gi).test(value);
    let alphaCount = value.match(/[a-zA-Z]/gi).length;
    assert(hasCorrectCharacters && alphaCount > 7, 'invalid VIN');
  }
}

fi.define('validateVin', buildValidateVin);
