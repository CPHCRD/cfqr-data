'use strict';

const packageJson = require('./package.json');
const version = packageJson.version;
const elements = require('./elements');
const scores = require('./scores');
const translations = require('./translations');

let questionnaireData = {
  version,
  elements,
  scores,
  translations
};

module.exports = exports = questionnaireData;