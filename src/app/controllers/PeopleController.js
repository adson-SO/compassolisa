const PeopleService = require('../services/PeopleService');

class PeopleController {
    async create(req, res) {
        const payload = req.body;
        try {
            const people = await PeopleService.create(payload);
            res.status(201).json(people);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async find(req, res) {
        const queryParams = req.query;
        try {
            const result = await PeopleService.find(queryParams);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new PeopleController;