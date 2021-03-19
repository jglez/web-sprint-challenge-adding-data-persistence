// Tasks Model
const db = require('../../data/dbConfig.js')

function getAll() {
  return Promise.resolve([{
    "task_id": 1, "task_description": "baz", "task_notes": null, "task_completed": false, "project_name": "bar", "project_description": null
  }])
}

function insert() {
  return Promise.resolve({
    "task_id": 1, "task_description": "baz", "task_notes": null, "task_completed": false, "project_id": 1
  })
}

module.exports = {
  getAll,
  insert
}
