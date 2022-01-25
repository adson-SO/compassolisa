module.exports = (server, routes, prefix = '/api/v1/car') => {
    server.use(prefix, routes);
}