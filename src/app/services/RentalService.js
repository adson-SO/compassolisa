const RentalRepository = require('../repository/RentalRepository');

class RentalService {
  async create(payload) {
    const result = await RentalRepository.create(payload);
    return result;
  }

  async find(queryParams) {
    if (Object.keys(queryParams).length === 0) queryParams = {};
    const result = await RentalRepository.find(queryParams);
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
