const AuthenticateRepository = require('../repository/AuthenticateRepository');

class AuthenticateService {
    async findOne(obj) {
        const result = await AuthenticateRepository.findOne(obj);
        return result;
    }
}

module.exports = new AuthenticateService;