const PeopleSchema = require('../schema/PeopleSchema');

class PeopleRepository {
    async create(payload) {
        const people = await PeopleSchema.create(payload);
        return people;
    }

    async find() {
        const result = await PeopleSchema.find();
        return result;
    }
}

module.exports = new PeopleRepository;