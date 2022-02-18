const RentalController = require('../app/controllers/RentalController');
const createValidation = require('../app/validations/rental/create');
const findValidation = require('../app/validations/rental/find');
const idValidation = require('../app/validations/idValidate');
const updateValidation = require('../app/validations/rental/update');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', createValidation, RentalController.create);
  routes.get('/', findValidation, RentalController.find);
  routes.get('/:id', idValidation, RentalController.findById);
  routes.put('/:id', updateValidation, RentalController.update);
  routes.delete('/:id', idValidation, RentalController.delete);
  server.use(prefix, routes);
};
