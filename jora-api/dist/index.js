'use strict';

require('babel-polyfill');

var _koaRoute = require('koa-route');

var _koaRoute2 = _interopRequireDefault(_koaRoute);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _projectApi = require('./projectApi');

var projects = _interopRequireWildcard(_projectApi);

var _taskApi = require('./taskApi');

var tasks = _interopRequireWildcard(_taskApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('./configHelper')();
var app = module.exports = (0, _koa2.default)();

projects.init(app);

app.use(_koaRoute2.default.post('/tasks', tasks.create));
app.use(_koaRoute2.default.get('/tasks/findByTag', tasks.findByTag));
app.use(_koaRoute2.default.get('/tasks/findByProject', tasks.findByProject));

app.use(_koaRoute2.default.get('/tasks/:tasksId', tasks.findById));
app.use(_koaRoute2.default.post('/tasks/:tasksId', tasks.update));
app.use(_koaRoute2.default.put('/tasks/:tasksId', tasks.update));
app.use(_koaRoute2.default.delete('/tasks/:tasksId', tasks.remove));

if (!module.parent) {
  app.listen(config.port);
  console.log('listening on port ' + config.port);
}