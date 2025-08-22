const Product = require('../models/productModel');

const productsArray = [];
let currentID = 1;

class ProductRepository {
    save(pData){
        const product = new Product(currentID++, pData.name, pData.price, pData.description);
        productsArray.push(product);
        return product;
    }

    findAll(){
        return productsArray;
    }

    findById(pId){
        return productsArray.find(product => product.id === pId )
    }

    updateproduct(id, pData) {
    const product = productsArray.find(product => product.id === id);
    if (product) {
      product.name = pData.name;
      product.price = pData.price;
      product.description = pData.description;

      return product;
    }
    return null;
  }

  deleteproduct(id) {
    const locatedId = productsArray.findIndex((product) => product.id === id);
    if (locatedId !== -1) {
      return productsArray.splice(locatedId, 1)[0];
    }
    return null;
  }
}

module.exports = new ProductRepository();