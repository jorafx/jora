import 'babel-polyfill'
import {describe, it} from 'mocha'
import * as tasks from './taskApi'

describe('task api', function () {
  it('supports create', () => { tasks.create.should.not.be.null })
  it('supports findByTag', () => { tasks.findByTag.should.not.be.null })
  it('supports findByProject', () => { tasks.findByProject.should.not.be.null })
  it('supports findById', () => { tasks.findById.should.not.be.null })
  it('supports update', () => { tasks.update.should.not.be.null })
  it('supports remove', () => { tasks.remove.should.not.be.null })
})
