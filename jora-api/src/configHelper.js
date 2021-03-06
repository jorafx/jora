const mongoProdUri = process.env.MONGOHQ_URL || 'localhost:27017/jora'

let configuration = {
  local: {
    mode: 'local',
    port: 3000,
    mongoUrl: 'localhost:27017/jora-dev'
  },
  staging: {
    mode: 'staging',
    port: 4000,
    mongoUrl: 'localhost:27017/jora-test'
  },
  prod: {
    mode: 'prod',
    port: process.env.PORT || 5000,
    mongoUrl: mongoProdUri
  }
}

function config(mode) {
  return configuration[mode || process.argv[2] || 'local'] || configuration.local
}

export default config
