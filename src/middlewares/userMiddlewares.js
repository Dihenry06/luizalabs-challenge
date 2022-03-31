const mongoose = require('mongoose');
const UserSchema = mongoose.model('User');

async function userExists(req, res, next) {
  try {
    const idUser = req.userId;
    const { email } = req.body;
    const userExist = await UserSchema.findOne({ email });

    if (!userExist) return next();

    if (userExist._id == idUser) return next();

    if (userExist) return res.status(400).json({ message: 'Email já cadastrado.' });
  } catch (error) {
    return res.status(500).json({ message: 'Ocorreu um erro ao consultar o e-mail.' });
  }
}
module.exports = { userExists };
