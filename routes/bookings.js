var express = require('express');
var router = express.Router();
require("../models/connection");
const Booking = require("../models/bookings")
// const moment = require("moment"); 

/* GET trips test. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;