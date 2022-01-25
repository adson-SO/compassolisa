const CarSchema = require('../schema/CarSchema');

class CarRepository {
    async create(payload) {
        const car = await CarSchema.create(payload);
        return car;
    }

    async find() {
        const cars = await CarSchema.find();
        return cars;
    }
}

module.exports = new CarRepository();