const Joi = require('joi');
const cnpjvalidate = require('../../../helpers/cnpjValidate');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().min(5).required(),
            cnpj: Joi.string().length(18).custom((value, helpers) => {
                if(cnpjvalidate(value) === false) {
                    return helpers.message('CNPJ is invalid');
                } else {
                    return true;
                }
            }).required(),
            atividades: Joi.string().min(10).required(),
            endereco: Joi.array().min(1).items(Joi.object({
                cep: Joi.string().length(9).required(),
                complemento: Joi.string().min(3),
                number: Joi.string().min(1).required(),
                isFilial: Joi.boolean().required()
            }))
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
}