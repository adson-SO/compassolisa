const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        const bodySchema = Joi.object({
            descricao: Joi.string().min(5).trim().required()
        });

        const paramSchema = Joi.object({
            id: Joi.string().length(24).required(),
            descricaoId: Joi.string().length(24).required()
        });

        const bodyResult = await bodySchema.validate(req.body, { abortEarly: true });
        const paramsResult = await paramSchema.validate(req.params, { abortEarly: true });
        if(bodyResult.error) throw bodyResult.error;
        if(paramsResult.error) throw paramsResult.error;
        return next();
    } catch (err) {
        return res.status(400).json({
            description: err.details[0].context.label,
            name: err.message
        });
    }
}