import 'babel-polyfill'
import {describe, it} from 'mocha'
import * as projects from './projectApi'

describe('project api', function () {
  it('supports create', () => { projects.create.should.not.be.null })
  it('supports findByTag', () => { projects.findByTag.should.not.be.null })
  it('supports findById', () => { projects.findById.should.not.be.null })
  it('supports update', () => { projects.update.should.not.be.null })
  it('supports remove', () => { projects.remove.should.not.be.null })
})
