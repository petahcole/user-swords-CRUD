
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table =>  {
    table.increments();
    table.text('email').notNullable().unique();
    table.text('password').notNullable();
    table.date('date').notNullable();
    table.boolean('is_active').notNullable().defaultTo(true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
