const Joi = require('joi').extend(require('@joi/date')); 

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi.string().min(3).trim().required(),
      cor: Joi.string().min(3).trim().required(),
      ano: Joi.date().raw().less('2023').min('1950').required(),
      acessorios: Joi.array().unique().min(1).items(Joi.object({ descricao: Joi.string().trim().required() }).min(1)).required(),
      quantidadePassageiros: Joi.number().integer().required()
    });

    const { error } = await schema.validate(req.body, { abortEarly: true });
    if(error) throw error;
    return next();
  } catch (err) {
    return res.status(400).json({
      description: err.details[0].context.label,
      name: err.message
    });
  }
};