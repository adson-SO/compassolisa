const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
  async create(payload) {
    const data = await PeopleRepository.create(payload);
    const people = this.formatCPF(data);
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
    if(Object.keys(queryParams).length === 0) queryParams = {};
    const people = await PeopleRepository.find(queryParams);
    const result = people.map(person => this.formatCPF(person));
    return result;
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
    const result = this.formatCPF(people);
    return result;
  }

  async findOne(obj) {
    const result = await PeopleRepository.findOne(obj);
    return result;
  }

  formatCPF(payload) {
    const cpf = payload.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const result = Object.assign(payload, { cpf: cpf });
    return result;
  }
}

module.exports = new PeopleService;