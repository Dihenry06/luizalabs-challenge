const routes = require('express').Router();
const AuthController = require('../controllers/AuthController');

const validatorsLogon = require('../validators/logonValidators');

const authMiddlewares = require('../middlewares/authMiddlewares');

routes.get('/', AuthController.registration);
routes.post('/', validatorsLogon, authMiddlewares.authRegistration, AuthController.login);

module.exports = routes;
