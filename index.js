'use strict';

var packageJson = require('./package.json');
var version = packageJson.version;
var elements = require('./elements');
var scores = require('./scores');
var translations = require('./translations');

var questionnaireData = {
  version: version,
  elements: elements,
  scores: scores,
  translations: translations
};

module.exports = exports = questionnaireData;
