
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { task_description: 'task 1', task_notes: 'this is a task', task_completed: false, project_id: 1 },
        { task_description: 'task 2', task_notes: 'this is a task', task_completed: false, project_id: 1 },
        { task_description: 'task 3', task_notes: 'this is a task', task_completed: false, project_id: 2 },
        { task_description: 'task 4', task_notes: 'this is a task', task_completed: false, project_id: 2 },
        { task_description: 'task 5', task_notes: 'this is a task', task_completed: false, project_id: 2 },
        { task_description: 'task 6', task_notes: 'this is a task', task_completed: false, project_id: 3 },
        { task_description: 'task 7', task_notes: 'this is a task', task_completed: false, project_id: 3 },
        { task_description: 'task 8', task_notes: 'this is a task', task_completed: false, project_id: 1 },
        { task_description: 'task 9', task_notes: 'this is a task', task_completed: false, project_id: 2 }
      ]);
    });
};
