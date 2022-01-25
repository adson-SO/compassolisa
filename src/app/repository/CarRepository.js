const CarSchema = require('../../infra/database/mongo');

class CarRepository {
    async create(payload) {
        const car = await CarSchema.create(payload);
        return car;
    }
}

module.exports = new CarRepository();