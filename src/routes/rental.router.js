const RentalController = require('../app/controllers/RentalController');
const createValidation = require('../app/validations/rental/create');
const findValidation = require('../app/validations/rental/find');
const findByIdValidation = require('../app/validations/rental/findById');
const updateValidation = require('../app/validations/rental/update');
const deleteValidation = require('../app/validations/rental/delete');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', createValidation, RentalController.create);
  routes.get('/', findValidation, RentalController.find);
  routes.get('/:id', findByIdValidation, RentalController.findById);
  routes.put('/:id', updateValidation, RentalController.update);
  routes.delete('/:id', deleteValidation, RentalController.delete);
  server.use(prefix, routes);
};
