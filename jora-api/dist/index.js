'use strict';

var _koaRoute = require('koa-route');

var _koaRoute2 = _interopRequireDefault(_koaRoute);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _projectController = require('./projectController');

var projects = _interopRequireWildcard(_projectController);

var _taskController = require('./taskController');

var tasks = _interopRequireWildcard(_taskController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _koa2.default)();

projects.init(app);

app.use(_koaRoute2.default.post('/projects', projects.create));
app.use(_koaRoute2.default.get('/projects/findByTag', projects.findByTag));

app.use(_koaRoute2.default.get('/project/:projectId', projects.findById));
app.use(_koaRoute2.default.post('/project/:projectId', projects.update));
app.use(_koaRoute2.default.put('/project/:projectId', projects.update));
app.use(_koaRoute2.default.delete('/project/:projectId', projects.remove));

app.use(_koaRoute2.default.post('/tasks', tasks.create));
app.use(_koaRoute2.default.get('/tasks/findByTag', tasks.findByTag));
app.use(_koaRoute2.default.get('/tasks/findByProject', tasks.findByProject));

app.use(_koaRoute2.default.get('/tasks/:tasksId', tasks.findById));
app.use(_koaRoute2.default.post('/tasks/:tasksId', tasks.update));
app.use(_koaRoute2.default.put('/tasks/:tasksId', tasks.update));
app.use(_koaRoute2.default.delete('/tasks/:tasksId', tasks.remove));

app.listen(3000);
console.log('listening on port 3000');