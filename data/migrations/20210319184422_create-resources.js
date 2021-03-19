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
      table.string('resource_name').notNullable().unique()
      table.string('resource_description')
    })

    .createTable('tasks', table => {
      table.increments('task_id')
      table.string('task_description').notNullable()
      table.string('task_notes')
      table.boolean('task_completed').defaultTo(false)
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

    // This is an appointment table
    // It connects a resource to a project
    .createTable('project_resources', table => {
      table.increments('resource_assignment_id')
      table.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')

      table.integer('resource_id')
        .unsigned()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT')
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
