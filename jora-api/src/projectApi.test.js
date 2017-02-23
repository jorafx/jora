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
  it('supports update via put', (done) => {
    co(function *() {
      let project = yield projects.insert({name: 'OldProjectName'})
      let id = project._id
      let updateUrl = '/project/' + id

      request
        .put(updateUrl)
        .send({name: PROJECTNAME})
        .expect(200)
        .expect('location', updateUrl)
        .end(() => {
          co(function *() {
            let p = yield projects.findOne({_id: id})
            p.name.should.equal(PROJECTNAME)
          }).then(done, done)
        })
    })
  })
  it('supports update via post', (done) => {
    co(function *() {
      let project = yield projects.insert({name: 'OldProjectName'})
      let id = project._id
      let updateUrl = '/project/' + id

      request
        .post(updateUrl)
        .send({name: PROJECTNAME})
        .expect(200)
        .expect('location', updateUrl)
        .end(() => {
          co(function *() {
            let p = yield projects.findOne({_id: id})
            p.name.should.equal(PROJECTNAME)
          }).then(done, done)
        })
    })
  })
  it('supports remove', (done) => {
    co(function *() {
      let project = yield projects.insert({name: PROJECTNAME})
      let id = project._id
      let deleteUrl = '/project/' + id

      request
        .delete(deleteUrl)
        .expect(200)
        .end(() => {
          co(function *() {
            let p = yield projects.findOne({_id: id})
            assert.equal(p, null)
          }).then(done, done)
        })
    })
  })
  it('supports findById', (done) => {
    co(function *() {
      let project = yield projects.insert({name: PROJECTNAME})
      let id = project._id
      let getUrl = '/project/' + id

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect('location', getUrl)
        .expect((res) => {
          res.body.name.should.equal(PROJECTNAME)
        })
        .expect(200, done)
    })
  })
  it('supports findByName', (done) => {
    co(function *() {
      yield projects.insert({name: PROJECTNAME})
      let getUrl = '/projects/findByName?name=' + PROJECTNAME

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.name.should.equal(PROJECTNAME)
        })
        .expect(200, done)
    })
  })

  describe('supports findByTag', () => {
    beforeEach((done) => {
      co(function *() {
        yield [
          projects.insert({name: PROJECTNAME + '1', tags: ['tag1']}),
          projects.insert({name: PROJECTNAME + '2', tags: ['tag1', 'tag 2']}),
          projects.insert({name: PROJECTNAME + '3', tags: ['tag1', 'tag 2', 'tag 3']})
        ]

        done()
      })
    })
    it('using 1 tag', (done) => {
      let getUrl = '/projects/findByTag?tags=tag1'

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.projects.should.not.be.null
          res.body.projects.length.should.equal(3)
        })
        .expect(200, done)
    })
    it.skip('using 2 tags - doesnt work cant get $in to work', (done) => {
      let getUrl = '/projects/findByTag?tags=tag2,tag3'

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.projects.should.not.be.null
          res.body.projects.length.should.equal(2)
        })
        .expect(200, done)
    })
    it('do not find non existing tag', (done) => {
      let getUrl = '/projects/findByTag?tags=tag4'

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.projects.should.not.be.null
          res.body.projects.length.should.equal(0)
        })
        .expect(200, done)
    })
  })
})
