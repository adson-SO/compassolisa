const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
    async create(payload) {
        const people = await PeopleRepository.create(payload);
        return people;
    }

    async find(queryParams) {
        if(Object.keys(queryParams).length === 0) queryParams = {};
        const result = await PeopleRepository.find(queryParams);
        return result;
    }

    async delete(id) {
        await PeopleRepository.delete(id);
    }

    async update(id, newData) {
        await PeopleRepository.update(id, newData);
    }

    async findById(id) {
        const people = await PeopleRepository.findById(id);
        return people;
    }
}

module.exports = new PeopleService;