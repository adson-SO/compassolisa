const PeopleController = require('../app/controllers/PeopleController');
const createValidation = require('../app/validations/people/create');

module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.post('/', createValidation, PeopleController.create);
    server.use(prefix, routes);
}