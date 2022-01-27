const PeopleSchema = require('../schema/PeopleSchema');

class PeopleRepository {
    async create(payload) {
        const people = await PeopleSchema.create(payload);
        return people;
    }

    async find(queryParams) {
        const result = await PeopleSchema.find(queryParams);
        return result;
    }
}

module.exports = new PeopleRepository;