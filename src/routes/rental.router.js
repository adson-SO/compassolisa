const RentalController = require('../app/controllers/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post('/', RentalController.create);
    routes.get('/', RentalController.find);
    routes.get('/:id', RentalController.findById);
    server.use(prefix, routes);
};