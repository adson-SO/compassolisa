const CarRepository = require('../repository/CarRepository');

class CarService {
  async create(payload) {
    const car = await CarRepository.create(payload);
    const result = {
      _id: car._id,
      modelo: car.modelo,
      cor: car.cor,
      ano: car.ano,
      acessorios: car.acessorios,
      quantidadePassageiros: car.quantidadePassageiros
    };
    return result;
  }

  async find(queryParams) {
    if(Object.keys(queryParams).length === 0) queryParams = {};
    const cars = await CarRepository.find(queryParams);
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