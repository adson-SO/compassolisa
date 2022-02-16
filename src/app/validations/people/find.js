const Joi = require('joi').extend(require('@joi/date'));
const cpfValidate = require('../../../helpers/cpfValidate');

const birthDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18);

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().min(3),
      cpf: Joi.string()
        .length(14)
        .custom((value, helpers) => {
          if (cpfValidate(value) === false) {
            return helpers.message('CPF is invalid');
          }
          return true;
        }),
      data_nascimento: Joi.date().format('DD/MM/YYYY').raw().max(birthDate),
      email: Joi.string().email(),
      senha: Joi.string().min(6),
      habilitado: Joi.string().valid('sim', 'não')
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;
    return next();
  } catch (err) {
    return res.status(400).json({
      description: err.details[0].context.label,
      name: err.message
    });
  }
};
