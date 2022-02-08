const RentalController = require('../app/controllers/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post('/', RentalController.create);
    server.use(prefix, routes);
};