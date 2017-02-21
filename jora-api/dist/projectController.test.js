'use strict';

require('babel-polyfill');

var _mocha = require('mocha');

var _projectController = require('./projectController');

var projects = _interopRequireWildcard(_projectController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _mocha.describe)('project controller', function () {
  (0, _mocha.it)('has a function for create', function () {
    projects.create.should.not.be.null;
  });
  (0, _mocha.it)('has a function for findByTag', function () {
    projects.findByTag.should.not.be.null;
  });
  (0, _mocha.it)('has a function for findById', function () {
    projects.findById.should.not.be.null;
  });
  (0, _mocha.it)('has a function for update', function () {
    projects.update.should.not.be.null;
  });
  (0, _mocha.it)('has a function for remove', function () {
    projects.remove.should.not.be.null;
  });
});