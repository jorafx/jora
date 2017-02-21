'use strict';

var _configHelper = require('./configHelper');

var config = _interopRequireWildcard(_configHelper);

var _monk = require('monk');

var monk = _interopRequireWildcard(_monk);

var _coMonk = require('co-monk');

var wrap = _interopRequireWildcard(_coMonk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports.getMonkCollection = function (collectionName) {
  var db = monk(config().mongoUrl);
  return wrap(db.get(collectionName));
};