const CarController = require('../app/controllers/CarController');
const createValidation = require('../app/validations/car/create');
const findValidation = require('../app/validations/car/find');
const findByIdValidation = require('../app/validations/car/findById');
const updateValidation = require('../app/validations/car/update');
const deleteValidation = require('../app/validations/car/delete');
const updateAcessorioValidation = require('../app/validations/car/updateAcessorio');
const authToken = require('../app/middlewares/authToken');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', authToken, createValidation, CarController.create);
  routes.get('/', authToken, findValidation, CarController.find);
  routes.delete('/:id', authToken, deleteValidation, CarController.delete);
  routes.put('/:id', authToken, updateValidation, CarController.update);
  routes.get('/:id', authToken, findByIdValidation, CarController.findById);
  routes.patch('/:id/acessorios/:descricaoId', authToken, updateAcessorioValidation, CarController.updateAcessorio);
  server.use(prefix, routes);
};
