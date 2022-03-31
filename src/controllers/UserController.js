const mongoose = require('mongoose');
const UserSchema = mongoose.model('User');

const passwordUtils = require('../utils/passwordUtils');

async function create(req, res) {
  try {
    const { name, email, password } = req.body;

    const hash = await passwordUtils.passwordCript(password);

    const createUser = await UserSchema.create({
      name,
      email,
      password: hash,
    });

    if (!createUser) return res.status(400).json({ message: 'Falha ao cadastrar usuário.' });

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (error) {
    return res.status(500).json({ message: 'Falha ao cadastrar usuário.' });
  }
}

async function update(req, res) {
  try {
    const id = req.userId;
    const { name, email } = req.body;

    const updateUser = await UserSchema.updateOne(
      { _id: id },
      {
        name,
        email,
      }
    );

    if (!updateUser) return res.status(400).json({ message: 'Falha ao alterar o usuário.' });

    return res.status(200).json({ message: 'Usuário alterado com sucesso.' });
  } catch (error) {
    return res.status(500).json({ message: 'Falha ao alterar usuário.' });
  }
}

async function get(req, res) {
  try {
    const id = req.userId;

    const user = await UserSchema.findById(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });

    user.password = undefined;

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Falha ao consultar usuário.' });
  }
}

async function remove(req, res) {
  try {
    const id = req.userId;

    const removeUser = await UserSchema.findByIdAndDelete(id);

    if (!removeUser) return res.status(404).json({ message: 'Usuário não encontrado.' });

    return res.status(200).json({ message: 'Usuário deletado com sucesso.' });
  } catch (error) {
    return res.status(500).json({ message: 'Falha ao excluir usuário.' });
  }
}
module.exports = { create, update, get, remove };
