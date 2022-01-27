const PeopleController = require('../app/controllers/PeopleController');
const createValidation = require('../app/validations/people/create');

module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.post('/', createValidation, PeopleController.create);
    routes.get('/', PeopleController.find);
    routes.get('/:id', PeopleController.findById);
    server.use(prefix, routes);
}