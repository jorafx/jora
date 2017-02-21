'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.findById = exports.findByTag = exports.create = exports.init = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _koaRoute = require('koa-route');

var _koaRoute2 = _interopRequireDefault(_koaRoute);

var _coBody = require('co-body');

var parse = _interopRequireWildcard(_coBody);

var _monkUtil = require('./monkUtil.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projects = (0, _monkUtil.getMonkCollection)('projects');

var create = regeneratorRuntime.mark(function create() {
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          this.body = 'create called!';
        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, create, this);
});
var findByTag = regeneratorRuntime.mark(function findByTag() {
  return regeneratorRuntime.wrap(function findByTag$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          this.body = 'findByTag called';
        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, findByTag, this);
});
var findById = regeneratorRuntime.mark(function findById(id) {
  return regeneratorRuntime.wrap(function findById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          this.body = 'findById called with ' + id;
        case 1:
        case 'end':
          return _context3.stop();
      }
    }
  }, findById, this);
});
var update = regeneratorRuntime.mark(function update(id) {
  return regeneratorRuntime.wrap(function update$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          this.body = 'update called with ' + id;
        case 1:
        case 'end':
          return _context4.stop();
      }
    }
  }, update, this);
});
var remove = regeneratorRuntime.mark(function remove(id) {
  return regeneratorRuntime.wrap(function remove$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          this.body = 'remove called with ' + id;
        case 1:
        case 'end':
          return _context5.stop();
      }
    }
  }, remove, this);
});

var init = function init(app) {
  app.use(_koaRoute2.default.post('/projects', regeneratorRuntime.mark(function _callee() {
    var postedData, project;
    return regeneratorRuntime.wrap(function _callee$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return parse(this);

          case 2:
            postedData = _context6.sent;


            // TODO: Error handling

            project = _extends({}, postedData, { created_at: new Date() });
            _context6.next = 6;
            return projects.insert(project);

          case 6:
            project = _context6.sent;


            this.set('location', this.originalUrl + '/' + p._id);
            this.status = 201;

          case 9:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee, this);
  })));
};

exports.init = init;
exports.create = create;
exports.findByTag = findByTag;
exports.findById = findById;
exports.update = update;
exports.remove = remove;