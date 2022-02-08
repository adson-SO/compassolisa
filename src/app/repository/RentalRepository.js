const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
    async create(payload) {
        const result = await RentalSchema.create(payload);
        return result;
    }
}

module.exports = new RentalRepository;