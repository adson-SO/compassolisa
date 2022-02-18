const CarService = require('../services/CarService');

class CarController {
  async create(req, res) {
    const payload = req.body;
    try {
      const car = await CarService.create(payload);
      const result = {
        _id: car._id,
        modelo: car.modelo,
        cor: car.cor,
        ano: car.ano,
        acessorios: car.acessorios,
        quantidadePassageiros: car.quantidadePassageiros
      };
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }

  async find(req, res) {
    const { query } = req;
    try {
      const cars = await CarService.find(query);
      return res.status(200).json(cars);
    } catch (err) {
      return res.status(500).json({ description: err.name, name: err.message });
    }
  }

  async delete(req, res) {
    const carId = req.params.id;
    try {
      const car = await CarService.findById(carId);
      if (car === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      await CarService.delete(carId);
      return res.status(204).end();
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }

  async update(req, res) {
    const carId = req.params.id;
    const newData = req.body;
    try {
      const car = await CarService.update(carId, newData);
      if (car === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      const result = {
        _id: car._id,
        modelo: car.modelo,
        cor: car.cor,
        ano: car.ano,
        acessorios: car.acessorios,
        quantidadePassageiros: car.quantidadePassageiros
      };
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }

  async findById(req, res) {
    const carId = req.params.id;
    try {
      const car = await CarService.findById(carId);
      if (car === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      return res.status(200).json(car);
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }

  async updateAcessorio(req, res) {
    const { id, descricaoId } = req.params;
    const newData = req.body;
    try {
      const car = await CarService.updateAcessorio(id, descricaoId, newData);
      if (car === null) {
        return res.status(404).json({ description: 'Not Found', name: 'ID does not exist in the database' });
      }
      const result = {
        _id: car._id,
        modelo: car.modelo,
        cor: car.cor,
        ano: car.ano,
        acessorios: car.acessorios,
        quantidadePassageiros: car.quantidadePassageiros
      };
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ description: err.name, name: err.message });
    }
  }
}

module.exports = new CarController();
