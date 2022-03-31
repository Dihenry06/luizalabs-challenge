const routes = require('express').Router();
const FavoriteProductController = require('../controllers/FavoriteProductsController');

const auth = require('../middlewares/authMiddlewares');
const favoriteProductsMiddlewares = require('../middlewares/favoriteProductsMiddlewares');

routes.get(
  '/',
  auth.authRegistration,
  auth.authLogin,
  FavoriteProductController.listFavoriteProducts
);
routes.post(
  '/',
  auth.authRegistration,
  auth.authLogin,
  favoriteProductsMiddlewares.existProduct,
  favoriteProductsMiddlewares.checkIfFavoriteProduct,
  FavoriteProductController.addFavoriteProducts
);

module.exports = routes;
