const express = require('express');
const cors = require('cors');
require('./infra/database/mongo');

class App {
    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes() {

    }
}

module.exports = new App().server;