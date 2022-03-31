const jwt = require('jsonwebtoken');
const authSecret = require('../../config/jwt/auth.json');

async function authRegistration(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ error: `authorization não informado` });
  }

  jwt.verify(authorization, authSecret.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'authorization inválido' });
    }
    return next();
  });
}

async function authLogin(req, res, next) {
  const authToken = req.headers.token;

  if (!authToken) {
    return res.status(401).json({ error: 'token não informado' });
  }

  const parts = authToken.split(' ');

  if (!(parts.length === 2)) {
    return res.status(401).json({ error: 'Token inválido' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token mal formatado.' });
  }

  jwt.verify(token, authSecret.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    req.userId = decoded.id;
    return next();
  });
}

module.exports = { authRegistration, authLogin };
