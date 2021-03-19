// Resources Model
function getAll() {
  return Promise.resolve({ "resource_id": 1, "resource_name": "foo", "resource_description": null })
}

module.exports = {
  getAll
}