'use strict';

var config = require('./configHelper')();
var monk = require('monk');
var wrap = require('co-monk');

module.exports.getMonkCollection = function (collectionName) {
  var db = monk(config.mongoUrl);
  return wrap(db.get(collectionName));
};