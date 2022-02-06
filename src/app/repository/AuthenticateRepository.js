const PeopleSchema = require('../schema/PeopleSchema');

class AuthenticateRepository {
  async findOne(obj) {
    const result = await PeopleSchema.findOne(obj);
    return result;
  }
}

module.exports = new AuthenticateRepository;