const { Router } = require('express');
const car = require('./car.router');
const people = require('./people.router');
const authenticate = require('./authenticate.router');

module.exports = server => {
    server.use((req, res, next) => {
        car(server, new Router());
        people(server, new Router());
        authenticate(server, new Router());
        next();
    });
}