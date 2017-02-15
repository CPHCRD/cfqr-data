'use strict';

const childParentTranslation = require('./child-parent.json');
const olderChildTranslation = require('./older-child.json');
const teenAdultTranslation = require('./teen-adult.json');
const youngChildTranslation = require('./young-child.json');

var translation = {
  "qst-young-child": youngChildTranslation,
  "qst-older-child": olderChildTranslation,
  "qst-teen-adult": teenAdultTranslation,
  "qst-child-parent": childParentTranslation
};

module.exports = exports = translation;
