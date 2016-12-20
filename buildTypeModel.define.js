'use strict';

const fi = require('function-injection');

buildBuildTypeModel.dependsOn = [];
buildBuildTypeModel.requires = ['object'];
buildBuildTypesModel.returns = 'type';

function buildBuildTypeModel(){
  return buildTypeModel;
  function buildTypeModel(typesModelValues) {
    return {
      value: typesModelValues,
      valueList: Object.values(typesModelValues)
    };
  }
}

fi.define('buildTypeModel', buildBuildTypeModel);
