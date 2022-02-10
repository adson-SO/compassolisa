const RentalService = require('../services/RentalService');
const axios = require('axios').default;

class RentalController {
    async create(req, res) {
        const payload = req.body;
        const iterator = payload.endereco.values();
        for (const endereco of iterator) {
            const { cep } = endereco;
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
            const { logradouro, bairro, localidade, uf } = data;
            Object.assign(endereco, { logradouro: logradouro, bairro: bairro, localidade: localidade, uf: uf });
        }
        try {
            const result = await RentalService.create(payload);
            res.status(201).json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async find(req, res) {
        const queryParams = req.query;
        try {
            const result = await RentalService.find(queryParams);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async findById(req, res) {
        const { id } = req.params;
        try {
            const result = await RentalService.findById(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const payload = req.body;
        try {
            const result = await RentalService.update(id, payload);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            await RentalService.delete(id);
            res.status(204).end();
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

module.exports = new RentalController;