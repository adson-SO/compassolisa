const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            modelo: Joi.string().min(3),
            cor: Joi.string().min(3),
            ano: Joi.date().raw().less('2023').min('1950'),
            acessorios: Joi.array().unique().min(1).items(Joi.object({ descricao: Joi.string().required() }).min(1)),
            quantidadePassageiros: Joi.number().integer()
        });

        const { error } = await schema.validate(req.body, { abortEarly: true });
        if(error) throw error;
        return next();
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}