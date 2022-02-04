const AuthenticateController = require('../app/controllers/AuthenticateController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', AuthenticateController.authenticate);
  server.use(prefix, routes);
};