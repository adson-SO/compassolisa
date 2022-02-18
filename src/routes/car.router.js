const CarController = require('../app/controllers/CarController');
const createValidation = require('../app/validations/car/create');
const findValidation = require('../app/validations/car/find');
const idValidation = require('../app/validations/idValidate');
const updateValidation = require('../app/validations/car/update');
const updateAcessorioValidation = require('../app/validations/car/updateAcessorio');
const authToken = require('../app/middlewares/authToken');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', authToken, createValidation, CarController.create);
  routes.get('/', authToken, findValidation, CarController.find);
  routes.delete('/:id', authToken, idValidation, CarController.delete);
  routes.put('/:id', authToken, idValidation, updateValidation, CarController.update);
  routes.get('/:id', authToken, idValidation, CarController.findById);
  routes.patch('/:id/acessorios/:descricaoId', authToken, updateAcessorioValidation, CarController.updateAcessorio);
  server.use(prefix, routes);
};
