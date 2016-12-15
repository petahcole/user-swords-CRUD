
exports.up = function(knex, Promise) {
  return knex.schema.createTable("swords", table => {
      table.increments();
      table.text("description").notNullable();
      table.integer("length").notNullable();
      table.boolean("is_sharp").notNullable().defaultTo(true);
      table.integer("user_id").references("users.id").unsigned().onDelete("cascade")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("swords");
};
