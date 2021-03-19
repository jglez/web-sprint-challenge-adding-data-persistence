// Resources Model
const db = require('../../data/dbConfig.js')

function getAll() {
  return db('resources')
}

function insert(resource) {
  return db('resources').insert(resource)
    .then(([id]) => {
      return db('resources').where('resource_id', id)
    })
}

module.exports = {
  getAll,
  insert
}