
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { project_name: 'project 1', project_description: 'first project', project_completed: false },
        { project_name: 'project 2', project_description: 'second project', project_completed: false },
        { project_name: 'project 3', project_description: 'third project', project_completed: false }
      ]);
    });
};
