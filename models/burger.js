const orm = require("../config/orm.js");

let burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        });
    },

    insertOne: function(name, cb) {
        orm.insertOne("burgers", "burger_name, devoured", name, False, function(res) {
            cb(res);
        });
    },

    updateOne: function(burgerId, cb) {
        burgerId = parseInt(burgerId);
        orm.updateOne("burgers", "devoured = 1", `id = ${burgerId}`, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;