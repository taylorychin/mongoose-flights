const mongoose = require('mongoose');

mongoose.connect(
    // db connection string
    'mongodb+srv://Taylor-Chin:admin@cluster0.gvs1c.mongodb.net/flights1?retryWrites=true&w=majority',
    // connection options
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
);

// Shortcut var to...
const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});