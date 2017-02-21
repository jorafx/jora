import _ from 'koa-route'
import koa from 'koa'

import * as projects from './projectApi'
import * as tasks from './taskApi'

const app = koa()

projects.init(app)

app.use(_.post('/projects', projects.create))
app.use(_.get('/projects/findByTag', projects.findByTag))

app.use(_.get('/project/:projectId', projects.findById))
app.use(_.post('/project/:projectId', projects.update))
app.use(_.put('/project/:projectId', projects.update))
app.use(_.delete('/project/:projectId', projects.remove))

app.use(_.post('/tasks', tasks.create))
app.use(_.get('/tasks/findByTag', tasks.findByTag))
app.use(_.get('/tasks/findByProject', tasks.findByProject))

app.use(_.get('/tasks/:tasksId', tasks.findById))
app.use(_.post('/tasks/:tasksId', tasks.update))
app.use(_.put('/tasks/:tasksId', tasks.update))
app.use(_.delete('/tasks/:tasksId', tasks.remove))

app.listen(3000)
console.log('listening on port 3000')
