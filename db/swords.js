const knex = require("./database-connection");

module.exports = {
    getByUser: function(id)   {
return knex("swords").where("user_id", id)
    }
}
