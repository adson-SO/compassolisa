const PeopleSchema = require('../schema/PeopleSchema');

class PeopleRepository {
    async create(payload) {
        const people = await PeopleSchema.create(payload);
        return people;
    }

    async find(queryParams) {
        const result = await PeopleSchema.find(queryParams, '-__v');
        return result;
    }

    async delete(id) {
        await PeopleSchema.deleteOne({ _id: id });
    }

    async update(id, newData) {
        await PeopleSchema.updateOne({ _id: id }, newData);
    }

    async findById(id) {
        const people = await PeopleSchema.findOne({ _id: id }, '-__v');
        return people;
    }
}

module.exports = new PeopleRepository;