const Joi = require('joi');
const cnpjValidate = require('../../../helpers/cnpjValidate');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().min(5).trim(),
      cnpj: Joi.string()
        .length(18)
        .custom((value, helpers) => {
          if (cnpjValidate(value) === false) {
            return helpers.message('CNPJ is invalid');
          }
          return true;
        }),
      atividades: Joi.string().min(10).trim(),
      endereco: Joi.array()
        .min(1)
        .items(
          Joi.object({
            cep: Joi.string().length(9).trim(),
            complemento: Joi.string().min(3).trim(),
            number: Joi.string().min(1).trim(),
            isFilial: Joi.boolean()
          })
        )
    });

    const { error } = await schema.validate(req.body, { abortEarly: true });
    if (error) throw error;
    return next();
  } catch (err) {
    return res.status(400).json({
      description: err.details[0].context.label,
      name: err.message
    });
  }
};
