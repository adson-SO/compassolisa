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
      return res.status(400).json({
        description: 'Conflict',
        name: `${Object.keys(err.keyValue)[0]} ${Object.values(err.keyValue)[0]} already in use`
      });
    }
  }

  async find(req, res) {
    const { query } = req;
    try {
      const result = await PeopleService.find(query);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ description: err.name, name: err.message });
    }
  }

  async delete(req, res) {
    const peopleId = req.params.id;
    try {
      const people = await PeopleService.findById(peopleId);
      if (people === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      await PeopleService.delete(peopleId);
      return res.status(204).end();
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }

  async update(req, res) {
    const peopleId = req.params.id;
    const newData = req.body;
    try {
      const people = await PeopleService.update(peopleId, newData);
      if (people === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      const result = {
        _id: people._id,
        nome: people.nome,
        cpf: people.cpf,
        data_nascimento: people.data_nascimento,
        email: people.email,
        senha: people.senha,
        habilitado: people.habilitado
      };
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }

  async findById(req, res) {
    const peopleId = req.params.id;
    try {
      const people = await PeopleService.findById(peopleId);
      if (people === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      return res.status(200).json(people);
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }
}

module.exports = new PeopleController();
