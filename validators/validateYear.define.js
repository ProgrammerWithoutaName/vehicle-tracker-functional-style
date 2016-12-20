'use strict';

const fi = require('function-injection');

buildValidateVin.requires = ['string'];
buildValidateVin.dependsOn = ['assert']; // should be build in to function-injection;
function buildValidateYear(assert) {
  return validateYear;

  function validateYear(value) {
    let isYear = (/^\d{1,4}$/gi).test(value);
    assert(isYear, 'invalid Year');
  }
}

fi.define('validateVin', buildValidateVin);
