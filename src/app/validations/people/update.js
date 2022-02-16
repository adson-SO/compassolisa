const Joi = require('joi').extend(require('@joi/date'));
const cpfValidate = require('../../../helpers/cpfValidate');

const birthDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18);

module.exports = async (req, res, next) => {
  try {
    const bodySchema = Joi.object({
      nome: Joi.string().min(3).trim(),
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
      senha: Joi.string().min(6).trim(),
      habilitado: Joi.string().valid('sim', 'não')
    });

    const paramSchema = Joi.object({
      id: Joi.string().length(24).required()
    });

    const bodyResult = await bodySchema.validate(req.body, { abortEarly: true });
    const paramsResult = await paramSchema.validate(req.params, { abortEarly: true });
    if (bodyResult.error) throw bodyResult.error;
    if (paramsResult.error) throw paramsResult.error;
    return next();
  } catch (err) {
    return res.status(400).json({
      description: err.details[0].context.label,
      name: err.message
    });
  }
};
