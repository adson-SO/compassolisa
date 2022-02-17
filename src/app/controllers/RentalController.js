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
      return res.status(400).json(err);
    }
  }

  async find(req, res) {
    const { query } = req;
    try {
      const result = await RentalService.find(query);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async findById(req, res) {
    const { id } = req.params;
    try {
      const result = await RentalService.findById(id);
      if (result === null) {
        return res.status(404).json({ message: 'Not Found' });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const payload = req.body;
    try {
      const result = await RentalService.update(id, payload);
      if (result === null) {
        return res.status(404).json({ message: 'Not Found' });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const rental = await RentalService.findById(id);
      if (rental === null) {
        return res.status(404).json({ message: 'Not Found' });
      }
      await RentalService.delete(id);
      return res.status(204).end();
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

module.exports = new RentalController();
