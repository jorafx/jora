const config = require('./configHelper')()
const monk = require('monk')
const wrap = require('co-monk')

module.exports.getMonkCollection = (collectionName) => {
  const db = monk(config.mongoUrl)
  return wrap(db.get(collectionName))
}
