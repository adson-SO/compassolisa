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

    async find(req, res) {
        const queryParams = req.query;
        try {
            const cars = await CarService.find(queryParams);
            res.status(200).json(cars);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new CarController();