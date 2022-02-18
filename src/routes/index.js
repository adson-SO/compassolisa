const { Router } = require('express');
const car = require('./car.router');
const people = require('./people.router');
const authenticate = require('./authenticate.router');
const rental = require('./rental.router');
const swagger = require('./docs/swagger.router');

module.exports = (server) => {
  server.use((req, res, next) => {
    car(server, new Router());
    people(server, new Router());
    authenticate(server, new Router());
    rental(server, new Router());
    swagger(server, new Router());
    next();
  });
};
