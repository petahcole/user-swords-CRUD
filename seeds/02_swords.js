
exports.seed = function(knex, Promise) {
  return knex.raw("DELETE FROM swords; ALTER SEQUENCE swords_id_seq RESTART WITH 1")
    .then(function () {
      const newSwords = [{
        description: "long and pointy, very straight",
        length: 69,
        user_id: 3,
        img_url:"http://pngimg.com/upload/sword_PNG5499.png"
      },{
        description: "slightly curved, but very pretty",
        length: 74,
        is_sharp: false,
        user_id: 4,
        img_url:"http://pngimg.com/upload/sword_PNG5495.png"
      },{
        description: "short and stubby, easily concealed",
        length: 30,
        user_id: 3,
        img_url:"http://i561.photobucket.com/albums/ss57/Ashe37/Weapon%20Images/swords.png"
      },{
        description: "wooden",
        length: 50,
        is_sharp: false,
        user_id: 4,
        img_url:"http://www.medievalcollectibles.com/images/Product/large/MC-1609.png"
      }]
      return knex("swords").insert(newSwords);
    });
};
