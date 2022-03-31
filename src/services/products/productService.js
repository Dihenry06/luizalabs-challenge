const api = require('./config/configApiProducts');

async function listProducts(page = 1) {
  try {
    const { data } = await api.get(`?page=${page}`);
    return data;
  } catch (error) {
    return error;
  }
}

async function detailProduct(idProduct) {
  try {
    const { data } = await api.get(`${idProduct}/`);
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = { listProducts, detailProduct };
