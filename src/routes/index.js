const { Router } = require('express');
const car = require('./car.router');
const people = require('./people.router');

module.exports = server => {
    server.use((req, res, next) => {
        car(server, new Router());
        people(server, new Router());
        next();
    });
}