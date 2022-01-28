const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
    async create(payload) {
        const people = await PeopleRepository.create(payload);
        const result = this.formatCPF(people);
        return result;
    }

    async find(queryParams) {
        if(Object.keys(queryParams).length === 0) queryParams = {};
        const people = await PeopleRepository.find(queryParams);
        const result = people.map(person => this.formatCPF(person));
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

    formatCPF(payload) {
        const cpf = payload.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        const result = Object.assign(payload, { cpf: cpf });
        return result;
    }
}

module.exports = new PeopleService;