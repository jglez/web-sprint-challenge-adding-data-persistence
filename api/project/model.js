// Project Model
function getAll() {
  return Promise.resolve([{ "project_id": 1, "project_name": "bar", "project_description": null, "project_completed": false }])
}

function insert() {
  return Promise.resolve({ "project_id": 1, "project_name": "bar", "project_description": null, "project_completed": false })
}

module.exports = {
  getAll,
  insert
}