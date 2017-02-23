import 'babel-polyfill'
import koa from 'koa'

import * as projects from './projectApi'
import * as tasks from './taskApi'

const app = module.exports = koa()
const config = require('./configHelper')()

projects.init(app)
tasks.init(app)

if (!module.parent) {
  app.listen(config.port)
  console.log(`listening on port ${config.port}`)
}
