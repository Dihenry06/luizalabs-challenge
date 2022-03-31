const { celebrate, Segments, Joi } = require('celebrate');

const validatorCreateUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(3).message('Nome muito pequeno'),
    email: Joi.string().required().email().message('E-mail inválido'),
    password: Joi.string()
      .required()
      .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/))
      .message('Senha muito fraca'),
  }),
});

module.exports = { validatorCreateUser };
