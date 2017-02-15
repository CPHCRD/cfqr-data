'use strict';

const deDE = require('./de-DE');
const dkDK = require('./dk-DK');
const enUS = require('./en-US');
const frFR = require('./fr-FR');
const itIT = require('./it-IT');
const nlNL = require('./nl-NL');
const seSE = require('./se-SE');
const spSP = require('./sp-SP');

var translations = {
  "de-DE": deDE,
  "dk-DK": dkDK,
  "en-US": enUS,
  "fr-FR": frFR,
  "it-IT": itIT,
  "nl-NL": nlNL,
  "se-SE": seSE,
  "sp-SP": spSP,
};

module.exports = exports = translations;
