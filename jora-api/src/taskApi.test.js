import 'babel-polyfill'
import {describe, it, beforeEach, afterEach} from 'mocha'
import * as assert from 'assert'
import {getMonkCollection} from './monkUtil.js'
const co = require('co')
const app = require('./index.js')

describe('task api', () => {
  const tasks = getMonkCollection('tasks')
  const request = require('supertest').agent(app.listen())
  const TASKTITLE = 'A nice little title'

  beforeEach((done) => {
    co(function *() {
      yield tasks.remove({})
      done()
    })
  })

  afterEach((done) => {
    co(function *() {
      yield tasks.remove({})
      done()
    })
  })

  it('supports create', (done) => {
    request
      .post('/tasks')
      .send({title: TASKTITLE})
      .expect('location', /^\/task\/[0-9a-fA-F]{24}$/)
      .expect(201)
      .end(() => {
        co(function *() {
          let t = yield tasks.findOne({ title: TASKTITLE })
          t.title.should.equal(TASKTITLE)
        }).then(done, done)
      })
  })
  it('supports update via put', (done) => {
    co(function *() {
      let task = yield tasks.insert({title: 'OldTASKTITLE'})
      let id = task._id
      let updateUrl = '/task/' + id

      request
        .put(updateUrl)
        .send({title: TASKTITLE})
        .expect(200)
        .expect('location', updateUrl)
        .end(() => {
          co(function *() {
            let t = yield tasks.findOne({_id: id})
            t.title.should.equal(TASKTITLE)
          }).then(done, done)
        })
    })
  })
  it('supports update via post', (done) => {
    co(function *() {
      let task = yield tasks.insert({title: 'OldTASKTITLE'})
      let id = task._id
      let updateUrl = '/task/' + id

      request
        .post(updateUrl)
        .send({title: TASKTITLE})
        .expect(200)
        .expect('location', updateUrl)
        .end(() => {
          co(function *() {
            let t = yield tasks.findOne({_id: id})
            t.title.should.equal(TASKTITLE)
          }).then(done, done)
        })
    })
  })
  it('supports remove', (done) => {
    co(function *() {
      let task = yield tasks.insert({title: TASKTITLE})
      let id = task._id
      let deleteUrl = '/task/' + id

      request
        .delete(deleteUrl)
        .expect(200)
        .end(() => {
          co(function *() {
            let t = yield tasks.findOne({_id: id})
            assert.equal(t, null)
          }).then(done, done)
        })
    })
  })
  it('supports findById', (done) => {
    co(function *() {
      let task = yield tasks.insert({title: TASKTITLE})
      let id = task._id
      let getUrl = '/task/' + id

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect('location', getUrl)
        .expect((res) => {
          res.body.title.should.equal(TASKTITLE)
        })
        .expect(200, done)
    })
  })
  it('supports findByProject', (done) => {
    co(function *() {
      yield tasks.insert({title: TASKTITLE, project: {name: 'PROJ1'}})
      let getUrl = '/tasks/findByProject?project=PROJ1'

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.title.should.equal(TASKTITLE)
        })
        .expect(200, done)
    })
  })

  describe('supports findByTag', () => {
    beforeEach((done) => {
      co(function *() {
        yield [
          tasks.insert({title: TASKTITLE + '1', tags: ['tag1']}),
          tasks.insert({title: TASKTITLE + '2', tags: ['tag1', 'tag2']}),
          tasks.insert({title: TASKTITLE + '3', tags: ['tag1', 'tag2', 'tag3']})
        ]

        done()
      })
    })
    it('using 1 tag', (done) => {
      let getUrl = '/tasks/findByTag?tags=tag1'

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.tasks.should.not.be.null
          res.body.tasks.length.should.equal(3)
        })
        .expect(200, done)
    })
    it('using 2 tags', (done) => {
      let getUrl = '/tasks/findByTag?tags=tag2,tag3'

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.tasks.should.not.be.null
          res.body.tasks.length.should.equal(2)
        })
        .expect(200, done)
    })
    it('do not find non existing tag', (done) => {
      let getUrl = '/tasks/findByTag?tags=tag4'

      request
        .get(getUrl)
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.tasks.should.not.be.null
          res.body.tasks.length.should.equal(0)
        })
        .expect(200, done)
    })
  })
})
