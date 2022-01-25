const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        return mongoose.connect('mongodb://127.0.0.1:27017/compassolisa')
        .then(console.log('Connected to DB'))
        .catch((err) => console.log(err));
    }
}

module.exports = new Database().connect();