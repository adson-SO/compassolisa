const CarRepository = require('../repository/CarRepository');

class CarService {
  async create(payload) {
    const result = await CarRepository.create(payload);
    return result;
  }

  async find(query) {
    const cars = await CarRepository.find(query);
    return cars;
  }

  async delete(id) {
    await CarRepository.delete(id);
  }

  async update(id, newData) {
    const car = await CarRepository.update(id, newData);
    return car;
  }

  async findById(id) {
    const car = await CarRepository.findById(id);
    return car;
  }

  async updateAcessorio(id, descricaoId, newData) {
    const result = await CarRepository.updateAcessorio(id, descricaoId, newData);
    return result;
  }
}

module.exports = new CarService();
