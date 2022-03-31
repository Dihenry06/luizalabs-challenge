const routes = require('express').Router();
const UserController = require('../controllers/UserController');

const auth = require('../middlewares/authMiddlewares');

const userMiddlewares = require('../middlewares/userMiddlewares');

routes.get(
  '/',
  auth.authRegistration,
  auth.authLogin,
  userMiddlewares.userExists,
  UserController.get
);
routes.post('/', auth.authRegistration, userMiddlewares.userExists, UserController.create);
routes.put(
  '/',
  auth.authRegistration,
  auth.authLogin,
  userMiddlewares.userExists,
  UserController.update
);
routes.delete(
  '/',
  auth.authRegistration,
  auth.authLogin,
  userMiddlewares.userExists,
  UserController.remove
);

module.exports = routes;
