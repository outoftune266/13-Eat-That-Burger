const express = require("express");
const cat = require("../../../vu-nsh-fsf-pt-07-2020-u-c/13-MVC/01-Activities/17-CatsApp/Solved/models/cat.js");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.name, function (result) {
        res.json({ id: result.insertId })
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let burgerId = req.params.id;

    burger.updateOne(burgerId, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;