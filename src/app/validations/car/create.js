const Joi = require('joi').extend(require('@joi/date')); 

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            modelo: Joi.string().required(),
            cor: Joi.string().required(),
            ano: Joi.date().raw().less('2023').min('1950').required(),
            acessorios: Joi.array().unique().min(1).items(Joi.object({ descricao: Joi.string() }).min(1)).required(),
            quantidadePassageiros: Joi.number().integer().required()
        });

        const { error } = await schema.validate(req.body, { abortEarly: true });
        if(error) throw error;
        return next();
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}