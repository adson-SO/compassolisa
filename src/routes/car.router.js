const CarController = require('../app/controllers/CarController');
const createValidation = require('../app/validations/car/create');
const updateValidation = require('../app/validations/car/update');

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/', createValidation, CarController.create);
    routes.get('/', CarController.find);
    routes.delete('/:id', CarController.delete);
    routes.put('/:id', updateValidation, CarController.update);
    routes.get('/:id', CarController.findById);
    server.use(prefix, routes);
}