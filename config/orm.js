const connection = require("../config/connection.js");

let orm = {

    selectAll: function(tableInput, cb) {
        connection.query("SELECT * FROM ?", [tableInput], function(err,result) {
            if (err) throw err;

             cb(result);
        });
    },

    insertOne: function(tableInput, cols, name, state, cb) {
        connection.query("INSERT INTO ? (??) VALUES (??,??)", [tableInput, cols, name, state], function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function(tableInput, cols, ids) {
        connection.query("UPDATE ? SET ?? WHERE ??", [tableInput, cols, ids], function(err, result) {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;