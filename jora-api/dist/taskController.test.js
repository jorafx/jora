'use strict';

require('babel-polyfill');

var _mocha = require('mocha');

var _taskController = require('./taskController');

var tasks = _interopRequireWildcard(_taskController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _mocha.describe)('project controller', function () {
  (0, _mocha.it)('has a function for create', function () {
    tasks.create.should.not.be.null;
  });
  (0, _mocha.it)('has a function for findByTag', function () {
    tasks.findByTag.should.not.be.null;
  });
  (0, _mocha.it)('has a function for findByProject', function () {
    tasks.findByProject.should.not.be.null;
  });
  (0, _mocha.it)('has a function for findById', function () {
    tasks.findById.should.not.be.null;
  });
  (0, _mocha.it)('has a function for update', function () {
    tasks.update.should.not.be.null;
  });
  (0, _mocha.it)('has a function for remove', function () {
    tasks.remove.should.not.be.null;
  });
});