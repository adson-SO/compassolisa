const CarSchema = require('../schema/CarSchema');

class CarRepository {
    async create(payload) {
        const car = await CarSchema.create(payload);
        return car;
    }

    async find(queryParams) {
        const cars = await CarSchema.find(queryParams, '-__v');
        return cars;
    }
}

module.exports = new CarRepository();