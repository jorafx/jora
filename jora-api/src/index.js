import 'babel-polyfill'
import koa from 'koa'

import c  from './configHelper'
import * as projects from './projectApi'
import * as tasks from './taskApi'

const app = module.exports = koa()
const config = c()

projects.init(app)
tasks.init(app)

if (!module.parent) {
  app.listen(config.port)
  console.log(`listening on port ${config.port}`)
}
