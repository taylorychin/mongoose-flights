const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    create
}

// function create(req, res) {
//     res.render('tickets/new');
// }

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket) {
        res.redirect(`/flights/${req.params.id}`);

    })
}
