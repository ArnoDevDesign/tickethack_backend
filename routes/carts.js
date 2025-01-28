var express = require('express');
var router = express.Router();
require("../models/connection");
const Cart = require("../models/carts")
const moment = require("moment"); 

// /* GET trips test. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET trips chosen by the custumer. */
router.get("/", function(req,res) {
    Cart.findById(req.body._id).then((dataBook) => {
        res.json({
            departure: req.body.departure,
            arrival: req.body.arrival,
            date: moment(req.body.date).format("HH:mm"),
            price: req.body.price,
        })
    })
})

module.exports = router;