const CarController = require('../app/controllers/CarController');
const createValidation = require('../app/validations/car/create');
const findValidation = require('../app/validations/car/find');
const findByIdValidation = require('../app/validations/car/findById');
const updateValidation = require('../app/validations/car/update');
const deleteValidation = require('../app/validations/car/delete');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', createValidation, CarController.create);
  routes.get('/', findValidation, CarController.find);
  routes.delete('/:id', deleteValidation, CarController.delete);
  routes.put('/:id', updateValidation, CarController.update);
  routes.get('/:id', findByIdValidation, CarController.findById);
  routes.patch('/:id/acessorios/:descricaoId', CarController.updateAcessorio);
  server.use(prefix, routes);
};