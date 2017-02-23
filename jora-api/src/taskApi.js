import _ from 'koa-route'
const parse = require('co-body')
import {getMonkCollection} from './monkUtil.js'
const tasks = getMonkCollection('tasks')

function *create () {
  let postedData = yield parse(this)

  // TODO: Error handling

  let task = {...postedData, created_at: new Date()}
  task = yield tasks.insert(task)

  this.set('location', this.originalUrl + '/' + task._id)
  this.status = 201
}

let remove = function *(id) {
  yield tasks.remove({_id: id})
  this.status = 200
}

let update = function *(id) {
  let postedData = yield parse(this)

  // TODO: Error handling

  let task = {...postedData, updated_at: new Date()}
  task = yield tasks.update({_id: id}, task)

  this.set('location', this.originalUrl + '/' + task._id)
  this.status = 200
}

let findById = function *(id) {
  let task = yield tasks.findOne({_id: id})

  this.body = task
  this.set('location', this.originalUrl)
  this.status = 200
}

let findByProject = function *() {
  let task = yield tasks.findOne({'project.name': this.query.project})

  this.body = task
  this.set('location', this.originalUrl)
  this.status = 200
}

let findByTag = function *() {
  const tags = this.query.tags.split(',')
  const query = {tags: {$in: tags}}

  let queryResult = yield tasks.find(query)

  this.body = {tasks: queryResult}
  this.status = 200
}

let init = function (app) {
  app.use(_.post('/tasks', create))
  app.use(_.get('/tasks/findByTag', findByTag))
  app.use(_.get('/tasks/findByProject', findByProject))
  app.use(_.get('/task/:taskId', findById))
  app.use(_.post('/task/:taskId', update))
  app.use(_.put('/task/:taskId', update))
  app.use(_.delete('/task/:taskId', remove))
}

export {init}