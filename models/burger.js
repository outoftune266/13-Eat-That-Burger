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
        orm.updateOne("burgers", {devoured: True}, {id: burgerId}, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;