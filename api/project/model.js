// Project Model
const db = require('../../data/dbConfig.js')

function getAll() {
  return db('projects')
}

function insert(project) {
  return db('projects').insert(project)
    .then(([id]) => {
      return db('projects').where('project_id', id)
    })
}

module.exports = {
  getAll,
  insert
}