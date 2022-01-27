const PeopleSchema = require('../schema/PeopleSchema');

class PeopleRepository {
    async create(payload) {
        const people = await PeopleSchema.create(payload);
        return people;
    }
}

module.exports = new PeopleRepository;