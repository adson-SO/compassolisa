const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
  async create(payload) {
    const result = await PeopleRepository.create(payload);
    return result;
  }

  async find(query) {
    const people = await PeopleRepository.find(query);
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
