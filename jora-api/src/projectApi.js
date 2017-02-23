import _ from 'koa-route'
const parse = require('co-body')
import {getMonkCollection} from './monkUtil.js'
const projects = getMonkCollection('projects')

function *create () {
  let postedData = yield parse(this)

  // TODO: Error handling

  let project = {...postedData, created_at: new Date()}
  project = yield projects.insert(project)

  this.set('location', this.originalUrl + '/' + project._id)
  this.status = 201
}

let remove = function *(id) {
  yield projects.remove({_id: id})
  this.status = 200
}

let update = function *(id) {
  let postedData = yield parse(this)

  // TODO: Error handling

  let project = {...postedData, updated_at: new Date()}
  project = yield projects.update({_id: id}, project)

  this.set('location', this.originalUrl + '/' + project._id)
  this.status = 200
}

let findById = function *(id) {
  let project = yield projects.findOne({_id: id})

  this.body = project
  this.set('location', this.originalUrl)
  this.status = 200
}

let findByName = function *() {
  let project = yield projects.findOne({name: this.query.name})

  this.body = project
  this.set('location', this.originalUrl)
  this.status = 200
}

let findByTag = function *() {
  const tags = this.query.tags.split(',')
  const query = {tags: {$in: tags}}

  let queryResult = yield projects.find(query)

  this.body = {projects: queryResult}
  this.status = 200
}

let init = function (app) {
  app.use(_.post('/projects', create))
  app.use(_.get('/projects/findByTag', findByTag))
  app.use(_.get('/projects/findByName', findByName))
  app.use(_.get('/project/:projectId', findById))
  app.use(_.post('/project/:projectId', update))
  app.use(_.put('/project/:projectId', update))
  app.use(_.delete('/project/:projectId', remove))
}

export {init}
