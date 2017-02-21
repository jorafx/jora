import 'babel-polyfill'
import _ from 'koa-route'
import koa from 'koa'

import * as projects from './projectApi'
import * as tasks from './taskApi'

const config = require('./configHelper')()
const app = module.exports = koa()

projects.init(app)

app.use(_.post('/tasks', tasks.create))
app.use(_.get('/tasks/findByTag', tasks.findByTag))
app.use(_.get('/tasks/findByProject', tasks.findByProject))

app.use(_.get('/tasks/:tasksId', tasks.findById))
app.use(_.post('/tasks/:tasksId', tasks.update))
app.use(_.put('/tasks/:tasksId', tasks.update))
app.use(_.delete('/tasks/:tasksId', tasks.remove))

if (!module.parent) {
  app.listen(config.port)
  console.log(`listening on port ${config.port}`)
}
