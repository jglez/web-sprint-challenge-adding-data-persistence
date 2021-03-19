// This function will run when we're migrating these tables (creation)
exports.up = function (knex) {
  return knex.schema
    // First arg is table name
    // Second arg is a function that takes an obj called table
    // We'll construct a table with built-in methods
    .createTable('projects', table => {
      // Instantiate the primary key
      table.increments('project_id')
    })

    .createTable('resources', table => {

    })

    .createTable('tasks', table => {

    })

    .createTable('project_resources', table => {

    })
};

// This function will run when we roll back 
// (revert whatever we did in the up function)
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
