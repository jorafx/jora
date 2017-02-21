import 'babel-polyfill'
import {describe, it, before} from 'mocha'
import * as should from 'should'

describe('Configuration', () => {
  var validateConfig = (config) => {
    should.exists(config.mode)
    config.mode.should.not.be.emtpy

    should.exists(config.mongoUrl)
    config.mongoUrl.should.not.be.emtpy

    should.exists(config.port)
    config.port.should.not.be.emtpy
  }

  describe('Local configuration', () => {
    let config = {}

    before((done) => {
      config = require('./configHelper')('local')
      done()
    })

    it('loads local configuration default', (done) => {
      let localConfig = require('./configHelper')()
      localConfig.mode.should.equal('local')
      done()
    })

    it('loads config by parameter', (done) => {
      config = require('./configHelper')('local')
      config.mode.should.equal('local')
      done()
    })
    it('loads local configuration for unknown configurations', (done) => {
      var config = require('./configHelper')('unknown')
      config.mode.should.equal('local')
      done()
    })
    it('has all the valid properties', (done) => {
      validateConfig(config)
      done()
    })
  })

  describe('Staging configuration', function () {
    var config = require('./configHelper')('staging')

    it('loads config by parameter', (done) => {
      config.mode.should.equal('staging')
      done()
    })
    it('has all the valid properties', (done) => {
      validateConfig(config)
      done()
    })
  })

  describe('Productions configuration', function () {
    var config = require('./configHelper')('prod')

    it('loads config by parameter', (done) => {
      config.mode.should.equal('prod')
      done()
    })
    it('has all the valid properties', (done) => {
      validateConfig(config)
      done()
    })
  })
})
