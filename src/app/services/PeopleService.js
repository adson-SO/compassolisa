const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
  async create(payload) {
    const result = await PeopleRepository.create(payload);
    return result;
  }

  async find(queryParams) {
    if (Object.keys(queryParams).length === 0) queryParams = {};
    const people = await PeopleRepository.find(queryParams);
    return people;
  }

  async delete(id) {
    await PeopleRepository.delete(id);
  }

  async update(id, newData) {
    const people = await PeopleRepository.update(id, newData);
    return people;
  }

  async findById(id) {
    const people = await PeopleRepository.findById(id);
    return people;
  }
}

module.exports = new PeopleService();
