const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().min(3).required(),
            cpf: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
            data_nascimento: Joi.date().format('DD/MM/YYYY').raw().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().min(6).required(),
            habilitado: Joi.string().valid('sim', 'não').required()
        });

        const { error } = await schema.validate(req.body, { abortEarly: true });
        if(error) throw error;
        return next();
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}