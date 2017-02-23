import 'babel-polyfill'
import _ from 'koa-route'
import koa from 'koa'

import * as projects from './projectApi'
import * as tasks from './taskApi'

const config = require('./configHelper')()
const app = module.exports = koa()

projects.init(app)
tasks.init(app)

if (!module.parent) {
  app.listen(config.port)
  console.log(`listening on port ${config.port}`)
}
