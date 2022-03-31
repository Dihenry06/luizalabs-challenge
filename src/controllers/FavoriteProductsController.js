const mongoose = require('mongoose');
const FavoriteProductsSchema = mongoose.model('FavoriteProduct');

const favoritesProductsUtils = require('../utils/favoriteProductsUtils');

async function addFavoriteProducts(req, res) {
  try {
    const idUser = req.userId;
    const { idProduct } = req.body;

    const responseCreateFavoriteProduct = await FavoriteProductsSchema.create({
      idUser,
      idProduct,
    });

    if (!responseCreateFavoriteProduct)
      return res.status(400).json({ message: 'Ocorreu um erro ao adicionar a lista de favoritos' });

    return res.status(201).json({ message: 'Produto adicionado a lista de favoritos' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Ocorreu algum erro ao adicionar o produto a lista de favoritos' });
  }
}

async function listFavoriteProducts(req, res) {
  try {
    const idUser = req.userId;

    const favoritesProducts = await FavoriteProductsSchema.find({
      idUser,
    });

    if (!favoritesProducts)
      return res.status(400).json({ message: 'Ocorreu um erro ao listar a lista de favoritos' });

    const favoritesProductsArray =
      await favoritesProductsUtils.joinServiceProductWithFavoritesProducts(favoritesProducts);

    return res.status(200).json({ favoritesProductsArray });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Ocorreu algum erro ao adicionar o produto a lista de favoritos' });
  }
}

module.exports = { addFavoriteProducts, listFavoriteProducts };
