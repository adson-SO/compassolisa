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
}

module.exports = new CarRepository();