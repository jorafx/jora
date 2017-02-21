'use strict';

require('babel-polyfill');

var _mocha = require('mocha');

var _should = require('should');

var should = _interopRequireWildcard(_should);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _mocha.describe)('Configuration', function () {
  var validateConfig = function validateConfig(config) {
    should.exists(config.mode);
    config.mode.should.not.be.emtpy;

    should.exists(config.mongoUrl);
    config.mongoUrl.should.not.be.emtpy;

    should.exists(config.port);
    config.port.should.not.be.emtpy;
  };

  (0, _mocha.describe)('Local configuration', function () {
    var config = {};

    (0, _mocha.before)(function (done) {
      config = require('./configHelper')('local');
      done();
    });

    (0, _mocha.it)('loads local configuration default', function (done) {
      var localConfig = require('./configHelper')();
      localConfig.mode.should.equal('local');
      done();
    });

    (0, _mocha.it)('loads config by parameter', function (done) {
      config = require('./configHelper')('local');
      config.mode.should.equal('local');
      done();
    });
    (0, _mocha.it)('loads local configuration for unknown configurations', function (done) {
      var config = require('./configHelper')('unknown');
      config.mode.should.equal('local');
      done();
    });
    (0, _mocha.it)('has all the valid properties', function (done) {
      validateConfig(config);
      done();
    });
  });

  (0, _mocha.describe)('Staging configuration', function () {
    var config = require('./configHelper')('staging');

    (0, _mocha.it)('loads config by parameter', function (done) {
      config.mode.should.equal('staging');
      done();
    });
    (0, _mocha.it)('has all the valid properties', function (done) {
      validateConfig(config);
      done();
    });
  });

  (0, _mocha.describe)('Productions configuration', function () {
    var config = require('./configHelper')('prod');

    (0, _mocha.it)('loads config by parameter', function (done) {
      config.mode.should.equal('prod');
      done();
    });
    (0, _mocha.it)('has all the valid properties', function (done) {
      validateConfig(config);
      done();
    });
  });
});