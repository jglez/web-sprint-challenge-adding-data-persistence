// This function will run when we're migrating these tables (creation)
exports.up = function (knex) {
  return knex.schema
    // First arg is table name
    // Second arg is a function that takes an obj called table
    // We'll construct a table with built-in methods
    .createTable('projects', table => {
      // Instantiate the primary key
      table.increments('project_id')
      // Project name is required
      table.string('project_name').notNullable()
      table.string('project_description')
      // Boolean type - default to false/0 
      table.boolean('project_completed').defaultTo(false)
    })

    .createTable('resources', table => {
      table.increments('resource_id')
    })

    .createTable('tasks', table => {
      table.increments('task_id')
    })

    .createTable('project_resources', table => {
      table.increments('project_resource_id')
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
