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
        const people = await PeopleSchema.findOneAndUpdate({ _id: id }, newData);
        return people;
    }

    async findById(id) {
        const people = await PeopleSchema.findById(id, '-__v');
        return people;
    }

    async findOne(obj) {
        const result = await PeopleSchema.findOne(obj);
        return result;
    }
}

module.exports = new PeopleRepository;