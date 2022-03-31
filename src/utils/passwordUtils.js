const bcrypt = require('bcrypt');

async function passwordCript(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

async function comparePassword(password, dbPassword) {
  const compareSyncResponse = bcrypt.compareSync(password, dbPassword);

  return compareSyncResponse;
}

module.exports = { passwordCript, comparePassword };
