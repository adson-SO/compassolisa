const RentalRepository = require('../repository/RentalRepository');
const ViaCepRepository = require('../repository/ViaCepRepository');

class RentalService {
  async create(payload) {
    const iterator = payload.endereco.values();
    for (const endereco of iterator) {
      const { cep } = endereco;
      const data = await ViaCepRepository.find(cep);
      const { logradouro, bairro, localidade, uf } = data;
      Object.assign(endereco, { logradouro, bairro, localidade, uf });
    }
    const result = await RentalRepository.create(payload);
    return result;
  }

  async find(query) {
    const result = await RentalRepository.find(query);
    return result;
  }

  async findById(id) {
    const result = await RentalRepository.findById(id);
    return result;
  }

  async update(id, payload) {
    const result = await RentalRepository.update(id, payload);
    return result;
  }

  async delete(id) {
    await RentalRepository.delete(id);
  }
}

module.exports = new RentalService();
