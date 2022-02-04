const PeopleSchema = require('../schema/PeopleSchema');

class PeopleRepository {
  async create(payload) {
    const people = await PeopleSchema.create(payload);
    return people;
  }

  async find(queryParams) {
    const result = await PeopleSchema.paginate(queryParams, {
      select: '_id nome cpf data_nascimento email senha habilitado',
      customLabels: { docs: 'pessoas', totalDocs: 'total', totalPages: 'offsets', page: 'offset', pagingCounter: false, hasPrevPage: false, hasNextPage: false, prevPage: false, nextPage: false },
      limit: queryParams.limit || 10,
      page: queryParams.offset || 1
    });
    return result;
  }

  async delete(id) {
    await PeopleSchema.deleteOne({ _id: id });
  }

  async update(id, newData) {
    const people = await PeopleSchema.findByIdAndUpdate(id, newData, { returnDocument: 'after' });
    return people;
  }

  async findById(id) {
    const people = await PeopleSchema.findById(id, '-__v');
    return people;
  }
}

module.exports = new PeopleRepository;