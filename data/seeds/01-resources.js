
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'resource 1', resource_description: 'first resource' },
        { resource_name: 'resource 2', resource_description: 'second resource' },
        { resource_name: 'resource 3', resource_description: 'third resource' },
        { resource_name: 'resource 4', resource_description: 'fourth resource' },
        { resource_name: 'resource 5', resource_description: 'fifth resource' },
        { resource_name: 'resource 6', resource_description: 'sixth resource' },
        { resource_name: 'resource 7', resource_description: 'seventh resource' }
      ]);
    });
};
