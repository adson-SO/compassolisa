const CarRepository = require('../repository/CarRepository');
const moment = require('moment');

class CarService {
    async create(payload) {
        const car = await CarRepository.create(payload);
        return car;
    }
}

module.exports = new CarService();