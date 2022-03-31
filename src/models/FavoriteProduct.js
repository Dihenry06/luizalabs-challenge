const mongoose = require('mongoose');

const FavoriteProduct = new mongoose.Schema({
  idProduct: {
    type: String,
    required: true,
  },
  idUser: {
    type: String,
    required: true,
  },
});

mongoose.model('FavoriteProduct', FavoriteProduct);
