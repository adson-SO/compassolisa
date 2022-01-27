const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
    async create(payload) {
        const people = await PeopleRepository.create(payload);
        return people;
    }
}

module.exports = new PeopleService;