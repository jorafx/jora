import _ from 'koa-route'
const parse = require('co-body')
import {getMonkCollection} from './monkUtil.js'
const projects = getMonkCollection('projects')

let create = function *() {
  let postedData = yield parse(this)

  // TODO: Error handling

  let project = {...postedData, created_at: new Date()}
  project = yield projects.insert(project)

  this.set('location', this.originalUrl + '/' + project._id)
  this.status = 201
}

let findByTag = function *() { this.body = 'findByTag called' }
let findById = function *(id) { this.body = `findById called with ${id}` }
let update = function *(id) { this.body = `update called with ${id}` }
let remove = function *(id) { this.body = `remove called with ${id}` }

let init = function (app) {
  app.use(_.post('/projects', create))
}

export {init, create, findByTag, findById, update, remove}