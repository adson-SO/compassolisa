const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
    async create(payload) {
        const result = await RentalSchema.create(payload);
        return result;
    }

    async find(queryParams) {
        const result = await RentalSchema.paginate(queryParams, {
            select: '_id nome cnpj atividades endereco',
            customLabels: { docs: 'locadoras', totalDocs: 'total', totalPages: 'offsets', page: 'offset', pagingCounter: false, hasPrevPage: false, hasNextPage: false, prevPage: false, nextPage: false },
            limit: queryParams.limit || 10,
            page: queryParams.offset || 1
        });
        return result;
    }
}

module.exports = new RentalRepository;