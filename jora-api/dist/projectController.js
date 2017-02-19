'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.create = create;
exports.findByTag = findByTag;
exports.findById = findById;
exports.update = update;
exports.remove = remove;