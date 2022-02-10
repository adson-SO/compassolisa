const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().min(5).required(),
            atividades: Joi.string().min(10).required()
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