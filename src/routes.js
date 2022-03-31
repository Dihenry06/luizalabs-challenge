const routes = require('express').Router();

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const favoriteProductRoutes = require('./routes/favoriteProductsRoutes');

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/favorite-products', favoriteProductRoutes);

routes.get('/', (req, res) => {
  return res.sendStatus(200);
});

module.exports = routes;
