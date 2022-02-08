const RentalService = require('../services/RentalService');

class RentalController {
    async create(req, res) {
        const payload = req.body;
        try {
            const  result = await RentalService.create(payload);
            res.status(201).json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

module.exports = new RentalController;