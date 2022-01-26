const CarRepository = require('../repository/CarRepository');
const moment = require('moment');

class CarService {
    async create(payload) {
        const car = await CarRepository.create(payload);
        return car;
    }

    async find(queryParams) {
        if(Object.keys(queryParams).length === 0) queryParams = {};
        const cars = await CarRepository.find(queryParams);
        return cars;
    }
}

module.exports = new CarService();