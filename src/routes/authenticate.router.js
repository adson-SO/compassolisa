const PeopleController = require('../app/controllers/PeopleController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
    routes.post('/', PeopleController.authenticate);
    server.use(prefix, routes);
}