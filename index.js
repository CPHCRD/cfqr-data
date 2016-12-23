'use strict';

const packageJson = require('./package.json');
const version = packageJson.version;
const elements = require('./elements');
const scores = require('./scores');
const translations = require('./translations');

var questionnaireData = {
  version: version,
  elements: elements,
  scores: scores,
  translations: translations
};

module.exports = exports = questionnaireData;