// Tasks Model
function getAll() {
  return Promise.resolve('Tasks Get')
}

function insert() {
  return Promise.resolve('Tasks Post')
}

module.exports = {
  getAll,
  insert
}
