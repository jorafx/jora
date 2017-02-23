//const config = require('./configHelper')()
import c  from './configHelper'
const monk = require('monk')
const wrap = require('co-monk')

module.exports.getMonkCollection = (collectionName) => {
  const db = monk(c().mongoUrl)
  return wrap(db.get(collectionName))
}
