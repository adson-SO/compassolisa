const CarSchema = require('../schema/CarSchema');

class CarRepository {
    async create(payload) {
        const car = await CarSchema.create(payload);
        return car;
    }

    async find(queryParams) {
        const cars = await CarSchema.paginate(queryParams, {
            select: '_id modelo cor ano acessorios quantidadePassageiros',
            customLabels: { docs: 'veiculos', totalDocs: 'total' }
        });
        return cars;
    }

    async delete(id) {
        return CarSchema.deleteOne({ _id: id });
    }

    async findById(id) {
        const car = await CarSchema.findOne({ _id: id }, '-__v');
        return car;
    }
}

module.exports = new CarRepository();