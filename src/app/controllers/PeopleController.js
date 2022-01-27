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
}

module.exports = new PeopleController;