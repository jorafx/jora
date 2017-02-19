import 'babel-polyfill'
import should from 'should'
import * as tasks from './taskController'

describe("project controller", function () {
	it("has a function for create", () => { tasks.create.should.not.be.null; })
	it("has a function for findByTag", () => { tasks.findByTag.should.not.be.null; })
	it("has a function for findByProject", () => { tasks.findByProject.should.not.be.null; })
	it("has a function for findById", () => { tasks.findById.should.not.be.null; })
	it("has a function for update", () => { tasks.update.should.not.be.null; })
	it("has a function for remove", () => { tasks.remove.should.not.be.null; })
})