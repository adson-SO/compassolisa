const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  async create(payload) {
    const result = await RentalSchema.create(payload);
    return result;
  }

  async find(query) {
    const result = await RentalSchema.paginate(query, {
      select: '_id nome cnpj atividades endereco',
      customLabels: {
        docs: 'locadoras',
        totalDocs: 'total',
        totalPages: 'offsets',
        page: 'offset',
        pagingCounter: false,
        hasPrevPage: false,
        hasNextPage: false,
        prevPage: false,
        nextPage: false
      },
      limit: query.limit || 10,
      page: query.offset || 1
    });
    return result;
  }

  async findById(id) {
    const result = await RentalSchema.findById(id, '-__v');
    return result;
  }

  async update(id, payload) {
    const result = await RentalSchema.findByIdAndUpdate(id, payload, { returnDocument: 'after' });
    return result;
  }

  async delete(id) {
    return RentalSchema.findByIdAndDelete(id);
  }
}

module.exports = new RentalRepository();
