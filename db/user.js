const knex = require("./database-connection");

module.exports = {
    getOne: function(id)   {
return knex("users").where("id", id).first();
    },
    getAll: function()  {
        return knex("users")
    },
    makeInactive: function(id)  {
        var updatedColumn = {
            is_active: false
        }
        console.log(updatedColumn)
        return knex("users").where("id", id).update(updatedColumn)
    }
}