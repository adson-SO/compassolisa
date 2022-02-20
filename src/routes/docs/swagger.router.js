const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../../../swagger.json');

module.exports = (server, routes, prefix = '/api/v1/api-docs') => {
  routes.use('/', swaggerUi.serve);
  routes.get('/', swaggerUi.setup(swaggerDoc));
  server.use(prefix, routes);
};
