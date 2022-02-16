const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
  async create(payload) {
    const people = await PeopleRepository.create(payload);
    const result = {
      _id: people._id,
      nome: people.nome,
      cpf: people.cpf,
      data_nascimento: people.data_nascimento,
      email: people.email,
      senha: people.senha,
      habilitado: people.habilitado
    };
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
