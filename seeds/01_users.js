
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 3')
    .then(function () {
    const seedUsers = [{
      email: "philip.cunnell@colorado.edu",
      password: "poop",
      date: new Date()
    },
    {
      email: "cbatson89@gmail.com",
      password: "poo",
      date: new Date()
    }]
    return knex('users').insert(seedUsers)
    });
};
