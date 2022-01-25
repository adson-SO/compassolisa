const CarService = require('../services/CarService');

class CarController {
    async create(req, res) {
        const payload = req.body;
        try {
            const car = await CarService.create(payload);
            res.status(201).json(car);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = new CarController();