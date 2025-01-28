var express = require('express');
var router = express.Router();
require("../models/connection");
const Cart = require("../models/carts")
const moment = require("moment");

// /* GET trips test. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* POST trips chosen by the custumer. */
router.get("/", function (req, res) {
    Cart.findById(req.body._id).then((dataBook) => {
        res.json({
            departure: req.body.departure,
            arrival: req.body.arrival,
            date: moment(req.body.date).format("HH:mm"),
            price: req.body.price,
        })
    })
})


// Route POST pour récupérer les trajets sélectionnés
router.post("/api/carts", (req, res) => {
    const { tripIds } = req.body; // Les IDs des trajets sélectionnés 
    if (!tripIds || !Array.isArray(tripIds) || tripIds.length === 0) {
        return res.json({ result: false, error: "Aucun voyage sélectionné." });
    }
    // Chercher les trajets par leurs IDs
    Trip.find({ _id: { $in: tripIds } })
        .then((trips) => {
            if (trips.length === 0) {
                return res.json({ result: false, error: "Aucun voyage trouvé pour les IDs donnés." });
            }
            // Formater les données avec moment.js
            const formattedTrips = trips.map((trip) => ({
                departure: trip.departure,
                arrival: trip.arrival,
                time: moment(trip.date).format("HH:mm"), // Formatage de l'heure
                price: trip.price,
            }));
            res.json({ result: true, selectedTrips: formattedTrips });
        })
        .catch((err) => {
            res.status(500).json({ result: false, error: "Erreur serveur", details: err });
        });
});


module.exports = router;