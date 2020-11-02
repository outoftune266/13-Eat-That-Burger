const connection = require("../config/connection.js");

let orm = {

    selectAll: function(tableInput, cb) {
        connection.query("SELECT * FROM ??;", tableInput, function(err,result) {
            if (err) throw err;

             cb(result);
        });
    },

    insertOne: function(tableInput, col1, col2, name, state, cb) {
        connection.query("INSERT INTO ?? (??, ??) VALUES (?,?);", [tableInput, col1, col2, name, state], function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function(tableInput, id, cb) {
        //console.log(tableInput);
        //console.log(cols);
        //console.log(ids);
        connection.query("UPDATE ?? SET devoured = 1 WHERE id = ?;", [tableInput, id], function(err, result) {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;