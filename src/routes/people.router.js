const PeopleController = require('../app/controllers/PeopleController');
const createValidation = require('../app/validations/people/create');
const findValidation = require('../app/validations/people/find');
const findByIdValidation = require('../app/validations/people/findById');
const updateValidation = require('../app/validations/people/update');
const deleteValidation = require('../app/validations/people/delete');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', createValidation, PeopleController.create);
  routes.get('/', findValidation, PeopleController.find);
  routes.delete('/:id', PeopleController.delete);
  routes.put('/:id', updateValidation, PeopleController.update);
  routes.get('/:id', PeopleController.findById);
  server.use(prefix, routes);
};