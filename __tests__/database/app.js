const express = require('express');
const router = require('../../src/routes');
require('./index');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(router);
  }
}

module.exports = new App().server;
