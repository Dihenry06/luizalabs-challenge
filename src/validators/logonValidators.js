const { celebrate, Segments, Joi } = require('celebrate');

const validatorLogonUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email().message('E-mail inválido'),
    password: Joi.string().required().min(8),
  }),
});

module.exports = validatorLogonUser;
