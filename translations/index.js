'use strict';

var daDK = require('./da-DK');
var deDE = require('./de-DE');
var enUS = require('./en-US');
var esES = require('./es-ES');
var frFR = require('./fr-FR');
var itIT = require('./it-IT');
var nlNL = require('./nl-NL');
var seSE = require('./se-SE');
var roRO = require('./ro-RO');
var czCZ = require('./cz-CZ');

var translations = {
  "da-DK": daDK,
  "de-DE": deDE,
  "en-US": enUS,
  "es-ES": esES,
  "fr-FR": frFR,
  "it-IT": itIT,
  "nl-NL": nlNL,
  "se-SE": seSE,
  "ro-RO": roRO,
  "cz-CZ": czCZ,
};

module.exports = exports = translations;
