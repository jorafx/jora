let create = function *() { this.body = 'create called!' }
let findByTag = function *() { this.body = 'findByTag called' }
let findById = function *(id) { this.body = `findById called with ${id}` }
let update = function *(id) { this.body = `update called with ${id}` }
let remove = function *(id) { this.body = `remove called with ${id}` }

export {create, findByTag, findById, update, remove}