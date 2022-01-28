const CarRepository = require('../repository/CarRepository');

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
}

module.exports = new CarService();