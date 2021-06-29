const { TooManyRequests } = require('http-errors');
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
    }
})


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United',]
    },

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },

    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },

    departs: {
        type: Date,
        default: function () {
            let departDate = new Date();
            departDate.setFullYear(departDate.getFullYear() + 1);
            return departDate;
        }
    },

    destinations: [destinationSchema],
    tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }]
});

module.exports = mongoose.model("Flight", flightSchema);