import 'babel-polyfill'
import should from 'should'
import * as projects from './projectController'

describe("project controller", function () {
	it("has a function for create", () => { projects.create.should.not.be.null; })
	it("has a function for findByTag", () => { projects.findByTag.should.not.be.null; })
	it("has a function for findById", () => { projects.findById.should.not.be.null; })
	it("has a function for update", () => { projects.update.should.not.be.null; })
	it("has a function for remove", () => { projects.remove.should.not.be.null; })
})