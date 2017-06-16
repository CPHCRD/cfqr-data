
'use strict';

var childParentTranslation = require('./child-parent.json');
var olderChildTranslation = require('./older-child.json');
var teenAdultTranslation = require('./teen-adult.json');
var youngChildTranslation = require('./young-child.json');

var translation = {
  "qst-young-child": youngChildTranslation,
  "qst-older-child": olderChildTranslation,
  "qst-teen-adult": teenAdultTranslation,
  "qst-child-parent": childParentTranslation
};

module.exports = exports = translation;
