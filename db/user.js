const knex = require("./database-connection");

module.exports = {
    getOne: function(id)   {
return knex("users").where("id", id).first();
    },
    getAll: function()  {
        return knex("users")
    }
}