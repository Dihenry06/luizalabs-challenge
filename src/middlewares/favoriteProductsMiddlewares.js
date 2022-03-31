const mongoose = require('mongoose');
const FavoriteProductsSchema = mongoose.model('FavoriteProduct');

const ProductService = require('../services/products/productService');

async function checkIfFavoriteProduct(req, res, next) {
  try {
    const idUser = req.userId;
    const { idProduct } = req.body;

    const checkExistProduct = await ProductService.detailProduct(idProduct);

    if (!checkExistProduct) return res.status(404).json({ message: 'Produto não encontrado' });

    const alreadyFavorited = await FavoriteProductsSchema.findOne({ idUser, idProduct });

    if (alreadyFavorited) {
      return res.status(400).json({ message: 'Produto já favoritado' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Ocorreu algum erro ao consultar o banco' });
  }
}

async function existProduct(req, res, next) {
  try {
    const { idProduct } = req.body;
    const responseProductService = await ProductService.detailProduct(idProduct);

    if (responseProductService.id !== idProduct) {
      return res.status(404).json({ message: 'Produto inválido' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Ocorreu algum erro ao consultar o banco' });
  }
}

module.exports = { checkIfFavoriteProduct, existProduct };
