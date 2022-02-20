const RentalService = require('../services/RentalService');

class RentalController {
  async create(req, res) {
    const payload = req.body;
    try {
      const rental = await RentalService.create(payload);
      const result = {
        _id: rental._id,
        nome: rental.nome,
        cnpj: rental.cnpj,
        atividades: rental.atividades,
        endereco: rental.endereco
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
      const result = await RentalService.find(query);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ description: err.name, name: err.message });
    }
  }

  async findById(req, res) {
    const { id } = req.params;
    try {
      const result = await RentalService.findById(id);
      if (result === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const payload = req.body;
    try {
      const rental = await RentalService.update(id, payload);
      if (rental === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      const result = {
        _id: rental._id,
        nome: rental.nome,
        cnpj: rental.cnpj,
        atividades: rental.atividades,
        endereco: rental.endereco
      };
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const rental = await RentalService.findById(id);
      if (rental === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      await RentalService.delete(id);
      return res.status(204).end();
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }
}

module.exports = new RentalController();
