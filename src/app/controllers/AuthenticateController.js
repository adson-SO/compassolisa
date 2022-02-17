const jwt = require('jsonwebtoken');
const AuthenticateService = require('../services/AuthenticateService');
require('dotenv').config();

class AuthenticateController {
  async authenticate(req, res) {
    const { email, senha } = req.body;
    try {
      const people = await AuthenticateService.findOne({ email, senha });
      if (!people) {
        return res.status(404).json({ message: 'Not Found' });
      }

      const token = jwt.sign({ id: people._id }, process.env.AUTH_SECRET, {
        expiresIn: 86400
      });

      return res
        .setHeader('Token', token)
        .status(200)
        .json({
          pessoa: {
            email: people.email,
            habilitado: people.habilitado
          },
          token
        });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new AuthenticateController();
