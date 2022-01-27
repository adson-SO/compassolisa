const PeopleController = require('../app/controllers/PeopleController');
const createValidation = require('../app/validations/people/create');
const updateValidation = require('../app/validations/people/update');

module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.post('/', createValidation, PeopleController.create);
    routes.get('/', PeopleController.find);
    routes.delete('/:id', PeopleController.delete);
    routes.put('/:id', updateValidation, PeopleController.update);
    routes.get('/:id', PeopleController.findById);
    server.use(prefix, routes);
}