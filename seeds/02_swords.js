
exports.seed = function(knex, Promise) {
  return knex.raw("DELETE FROM swords; ALTER SEQUENCE swords_id_seq RESTART WITH 1")
    .then(function () {
      const newSwords = [{
        description: "long and pointy, very straight",
        length: 69,
        user_id: 3
      },{
        description: "slightly curved, but very pretty",
        length: 74,
        is_sharp: false,
        user_id: 4
      },{
        description: "short and stubby, easily concealed",
        length: 30,
        user_id: 3
      },{
        description: "wooden",
        length: 50,
        is_sharp: false,
        user_id: 4
      }]
      return knex("swords").insert(newSwords);
    });
};
