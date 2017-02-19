import _ from 'koa-route'
import koa from 'koa'

import * as projects from './projectController'
import * as tasks from './taskController'

const app = koa()

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
