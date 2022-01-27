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

    async delete(req, res) {
        const peopleId = req.params.id;
        try {
            const people = await PeopleService.findById(peopleId);
            if(people === null) {
                res.status(404).json({ message: 'Not Found' });
            }
            await PeopleService.delete(peopleId);
            res.status(204).end();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async findById(req, res) {
        const peopleId = req.params.id;
        try {
            const people = await PeopleService.findById(peopleId);
            if(people === null) {
                res.status(404).json({ message: 'Not Found' });
            } else {
                res.status(200).json(people);
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = new PeopleController;