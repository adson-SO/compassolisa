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

  async delete(req, res) {
    const carId = req.params.id;
    try {
      const car = await CarService.findById(carId);
      if (car === null) {
        res.status(404).json({ message: 'Not Found' });
      }
      await CarService.delete(carId);
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async update(req, res) {
    const carId = req.params.id;
    const newData = req.body;
    try {
      const car = await CarService.update(carId, newData);
      if (car === null) {
        res.status(404).json({ message: 'Not Found' });
      } else {
        res.status(200).json(car);
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async findById(req, res) {
    const carId = req.params.id;
    try {
      const car = await CarService.findById(carId);
      if (car === null) {
        res.status(404).json({ message: 'Not Found' });
      } else {
        res.status(200).json(car);
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateAcessorio(req, res) {
    const carId = req.params.id;
    const { descricaoId } = req.params;
    const newData = req.body;
    try {
      const result = await CarService.updateAcessorio(carId, descricaoId, newData);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new CarController();
