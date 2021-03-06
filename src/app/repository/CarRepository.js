const CarSchema = require('../schema/CarSchema');

class CarRepository {
  async create(payload) {
    const car = await CarSchema.create(payload);
    return car;
  }

  async find(query) {
    const cars = await CarSchema.paginate(query, {
      select: '_id modelo cor ano acessorios quantidadePassageiros',
      customLabels: {
        docs: 'veiculos',
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
    return cars;
  }

  async delete(id) {
    return CarSchema.findByIdAndDelete(id);
  }

  async update(id, newData) {
    const car = await CarSchema.findByIdAndUpdate(id, newData, { returnDocument: 'after' });
    return car;
  }

  async findById(id) {
    const car = await CarSchema.findById(id, '-__v');
    return car;
  }

  async updateAcessorio(id, descricaoId, newData) {
    const result = await CarSchema.findOneAndUpdate(
      { _id: id, 'acessorios._id': descricaoId },
      {
        $set: {
          'acessorios.$.descricao': newData.descricao
        }
      },
      { returnDocument: 'after' }
    );
    return result;
  }
}

module.exports = new CarRepository();
