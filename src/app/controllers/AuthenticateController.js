const AuthenticateService = require('../services/AuthenticateService');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

class AuthenticateController {
  async authenticate(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;
    try {
      const people = await AuthenticateService.findOne({ email: email, senha: senha });
      if (!people) {
        res.status(404).json({ message: 'Not Found' });
      }

      const token = jwt.sign({ id: people._id }, authConfig.secret, {
        expiresIn: 86400
      });

      res.status(200).json({
        pessoa: {
          email: people.email,
          habilitado: people.habilitado
        },
        token
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new AuthenticateController;