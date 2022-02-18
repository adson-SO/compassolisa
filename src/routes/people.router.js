const PeopleController = require('../app/controllers/PeopleController');
const createValidation = require('../app/validations/people/create');
const findValidation = require('../app/validations/people/find');
const idValidation = require('../app/validations/idValidate');
const updateValidation = require('../app/validations/people/update');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', createValidation, PeopleController.create);
  routes.get('/', findValidation, PeopleController.find);
  routes.delete('/:id', idValidation, PeopleController.delete);
  routes.put('/:id', idValidation, updateValidation, PeopleController.update);
  routes.get('/:id', idValidation, PeopleController.findById);
  server.use(prefix, routes);
};
