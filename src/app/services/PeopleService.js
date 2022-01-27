const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
    async create(payload) {
        const people = await PeopleRepository.create(payload);
        return people;
    }

    async find() {
        const result = await PeopleRepository.find();
        return result;
    }
}

module.exports = new PeopleService;