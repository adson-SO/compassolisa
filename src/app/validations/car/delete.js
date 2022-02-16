const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.string().length(24).required()
    });

    const { error } = await schema.validate(req.params, { abortEarly: true });
    if (error) throw error;
    return next();
  } catch (err) {
    return res.status(400).json({
      description: err.details[0].context.label,
      name: err.message
    });
  }
};
