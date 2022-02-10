const { json } = require('express/lib/response');
const RentalService = require('../services/RentalService');
const axios = require('axios').default;

class RentalController {
    async create(req, res) {
        const payload = req.body;
        const endereco = payload.endereco.find(element => element !== undefined);
        const { cep } = endereco;
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
        const { logradouro, bairro, localidade, uf } = data;
        console.log(Object.assign(endereco, { logradouro: logradouro, bairro: bairro, localidade: localidade, uf: uf }));
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
}

module.exports = new RentalController;