const ProductService = require('../services/products/productService');

async function joinServiceProductWithFavoritesProducts(favoritesProducts) {
  let favoritesProductsArray = await Promise.all(
    favoritesProducts.map(async (listFavorites) => {
      const response = await ProductService.detailProduct(listFavorites.idProduct);

      return {
        id: listFavorites._id,
        idUser: listFavorites.idUser,
        idProduct: response.id,
        price: response.price,
        image: response.image,
        title: response.title,
      };
    })
  );

  return favoritesProductsArray;
}

module.exports = { joinServiceProductWithFavoritesProducts };
