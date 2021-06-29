const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    //flight ID is not a special value. it can be named anything.
    Flight.findById(req.params.flightId, function (err, flight) {
        //push subdoc (destination) into mongoose array.
        flight.destinations.push(req.body);

        //save changes made to parent document. (flight)
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}