exports.up = function(knex, Promise) {
  return knex.schema.table('users', table =>  {
    table.dropColumn('img_url');

  }).then(function(){
    return knex.schema.table('swords', table =>  {
        table.text('img_url').notNullable();
      })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('swords', table =>  {
    table.dropColumn('img_url');
  })
};
