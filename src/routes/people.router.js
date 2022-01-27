const PeopleController = require('../app/controllers/PeopleController');

module.exports = (server, routes, prefix = 'api/v1/people') => {
    
    server.use(prefix, routes);
}