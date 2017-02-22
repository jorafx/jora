import 'babel-polyfill'
import {describe, it, beforeEach, afterEach} from 'mocha'
import * as assert from 'assert'
import {getMonkCollection} from './monkUtil.js'
const co = require('co')
const app = require('./index.js')

describe('project api', () => {
  const projects = getMonkCollection('projects')
  const request = require('supertest').agent(app.listen())
  const PROJECTNAME = 'Jora project'

  beforeEach((done) => {
    co(function *() {
      yield projects.remove({})
      done()
    })
  })

  afterEach((done) => {
    co(function *() {
      yield projects.remove({})
      done()
    })
  })

  it('supports create', (done) => {
    // Post
    request
      .post('/projects')
      .send({name: PROJECTNAME})
      .expect('location', /^\/project\/[0-9a-fA-F]{24}$/)
      .expect(201)
      .end(() => {
        co(function *() {
          let p = yield projects.findOne({ name: PROJECTNAME })
          p.name.should.equal(PROJECTNAME)
        }).then(done, done)
      })
  })
  it('supports findByTag')
  it('supports findById')
  it('supports update')
  it('supports remove', (done) => {
    co(function *() {
      let project = yield projects.insert({name: PROJECTNAME})
      let id = project._id
      let deleteUrl = '/project/' + id
      request
        .delete(deleteUrl)
        .expect(200)
        .expect('location', '/')
        .end(() => {
          co(function *() {
            let p = yield projects.findOne({_id: id})
            assert.equal(p, null)
          }).then(done, done)
        })
    })
  })
})
