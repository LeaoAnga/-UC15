const pRepository = require("../repositories/productRepository");

class productService {
  async createProduct(pData) {
    if (!pData.name || !pData.price || !pData.description) {
      throw new Error("Nome, preço e descrição são obrigatórios.");
    }
    const product = await pRepository.save(pData);
    return product;
  }

  async findAll() {
    const products = await pRepository.findAll();
    return products;
  }

  async findProductById(id) {
    const product = await pRepository.findById(id);
    return product;
  }

  async updateProduct(id, pData) {
    const product = await pRepository.updateproduct(id, pData);
    return product;
  }

  async deleteProduct(id) {
    const product = await pRepository.deleteproduct(id);
    return product;
  }
}

module.exports = new productService();
