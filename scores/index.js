'use strict';

const childParent = require('./child-parent.json');
const olderChild = require('./older-child.json');
const teenAdult = require('./teen-adult.json');
const youngChild = require('./young-child.json');

var scores = {
  "qst-child-parent": childParent,
  "qst-older-child": olderChild,
  "qst-teen-adult": teenAdult,
  "qst-young-child": youngChild
};

module.exports = exports = scores;