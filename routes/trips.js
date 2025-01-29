var express = require('express');
var router = express.Router();
require("../models/connection");
const Trip = require("../models/trips")
const moment = require("moment");

// /* GET trips test. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// /* GET trips listing */
router.get("/", function (req, res) {
  Trip.find().then(allTrips => {
    res.json({ allTrips: allTrips });
  })
})

/* POST all trips by departure (pas de GET car besoin de tester avec req.body.departure) */
router.post("/", (req, res) => {
  // Valeur si les champs à remplir sont vides
  if (!req.body.departure || !req.body.arrival || !req.body.date) {
    return res.json({ result: false, error: "Missing required fields" });
  }
  // Liste des voyages en fonction des champs rempli incensibles à la casse
  Trip.find({
    departure: { $regex: new RegExp(req.body.departure, "i") },
    arrival: { $regex: new RegExp(req.body.arrival, "i") },
    // cherche dans une journée spécifique, sans tenir compte de l'heure
    date: {
      $gte: moment.utc(req.body.date).startOf("day").toDate(),
      $lt: moment.utc(req.body.date).endOf("day").toDate(),
    }
  })
    //réponse en fonction des champs rentrés
    .then((data) => {
      if (data.length === 0) {
        res.json({ result: false, error: "No trip found" });
      } else {
        res.json({ result: true, allTrips: data });
      }
    })
});


module.exports = router;
