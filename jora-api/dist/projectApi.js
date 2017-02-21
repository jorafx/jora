'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.findById = exports.findByTag = exports.create = exports.init = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _koaRoute = require('koa-route');

var _koaRoute2 = _interopRequireDefault(_koaRoute);

var _monkUtil = require('./monkUtil.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [create].map(regeneratorRuntime.mark);

var parse = require('co-body');

var projects = (0, _monkUtil.getMonkCollection)('projects');

function create() {
  var postedData, project;
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return parse(this);

        case 2:
          postedData = _context.sent;


          // TODO: Error handling

          project = _extends({}, postedData, { created_at: new Date() });
          _context.next = 6;
          return projects.insert(project);

        case 6:
          project = _context.sent;


          this.set('location', this.originalUrl + '/' + project._id);
          this.status = 201;

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

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
  app.use(_koaRoute2.default.post('/projects', create));
  app.use(_koaRoute2.default.get('/projects/findByTag', findByTag));
  app.use(_koaRoute2.default.get('/project/:projectId', findById));
  app.use(_koaRoute2.default.post('/project/:projectId', update));
  app.use(_koaRoute2.default.put('/project/:projectId', update));
  app.use(_koaRoute2.default.delete('/project/:projectId', remove));
};

exports.init = init;
exports.create = create;
exports.findByTag = findByTag;
exports.findById = findById;
exports.update = update;
exports.remove = remove;