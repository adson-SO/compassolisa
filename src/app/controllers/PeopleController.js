const PeopleService = require('../services/PeopleService');

class PeopleController {
  async create(req, res) {
    const payload = req.body;
    try {
      const people = await PeopleService.create(payload);
      const result = {
        _id: people._id,
        nome: people.nome,
        cpf: people.cpf,
        data_nascimento: people.data_nascimento,
        email: people.email,
        senha: people.senha,
        habilitado: people.habilitado
      };
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async find(req, res) {
    const { query } = req;
    try {
      const result = await PeopleService.find(query);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async delete(req, res) {
    const peopleId = req.params.id;
    try {
      const people = await PeopleService.findById(peopleId);
      if (people === null) {
        return res.status(404).json({ message: 'Not Found' });
      }
      await PeopleService.delete(peopleId);
      return res.status(204).end();
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async update(req, res) {
    const peopleId = req.params.id;
    const newData = req.body;
    try {
      const updatedPeople = await PeopleService.update(peopleId, newData);
      if (updatedPeople === null) {
        return res.status(404).json({ message: 'Not Found' });
      }
      return res.status(200).json(updatedPeople);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async findById(req, res) {
    const peopleId = req.params.id;
    try {
      const people = await PeopleService.findById(peopleId);
      if (people === null) {
        return res.status(404).json({ message: 'Not Found' });
      }
      return res.status(200).json(people);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new PeopleController();
