const axios = require('axios').default;
const RentalService = require('../services/RentalService');

class RentalController {
  async create(req, res) {
    const payload = req.body;
    const iterator = payload.endereco.values();
    for (const endereco of iterator) {
      const { cep } = endereco;
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
      const { logradouro, bairro, localidade, uf } = data;
      Object.assign(endereco, { logradouro, bairro, localidade, uf });
    }
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
    const queryParams = req.query;
    try {
      const result = await RentalService.find(queryParams);
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
