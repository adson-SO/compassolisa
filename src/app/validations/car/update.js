const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const bodySchema = Joi.object({
      modelo: Joi.string().min(3).trim(),
      cor: Joi.string().min(3).trim(),
      ano: Joi.date().raw().less('2023').min('1950'),
      acessorios: Joi.array()
        .unique()
        .min(1)
        .items(Joi.object({ descricao: Joi.string().trim().required() }).min(1)),
      quantidadePassageiros: Joi.number().integer()
    });

    const paramSchema = Joi.object({
      id: Joi.string().length(24)
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
