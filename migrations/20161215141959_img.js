
exports.up = function(knex, Promise) {
  return knex.schema.table('users', table =>  {
    table.text('img_url').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table =>  {
    table.dropColumn('img_url');
  })
};
