const CarRepository = require('../repository/CarRepository');

class CarService {
    async create(payload) {
        const car = await CarRepository.create(payload);
        return car;
    }
}

module.exports = new CarService();