const mongoose = require('mongoose');
const UserSchema = mongoose.model('User');

const jwt = require('jsonwebtoken');

const passwordUtils = require('../utils/passwordUtils');
const authSecret = require('../../config/jwt/auth.json');

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email });

    if (!user) return res.status(401).json({ message: 'email ou senha inválidos' });

    const comparePassword = await passwordUtils.comparePassword(password, user.password);

    if (!comparePassword) return res.status(401).json({ message: 'email ou senha inválido' });

    const tenHoursInSeconds = 36000;

    const token = jwt.sign({ id: user.id }, authSecret.secret, {
      expiresIn: tenHoursInSeconds,
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: 'Falha ao realizar o login' });
  }
}

async function registration(req, res) {
  try {
    const permissionAPI = process.env.PERMISSION_API;
    const authorization = jwt.sign({ id: permissionAPI }, authSecret.secret);

    return res.status(200).json({ authorization });
  } catch (error) {
    return res.status(500).json({ message: 'Falha ao gerar autorização da api' });
  }
}

module.exports = { login, registration };
