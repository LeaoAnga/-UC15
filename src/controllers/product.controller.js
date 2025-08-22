const pService = require('../services/productService');

class productController {
    async createProduct(req, res) {
        try {
          const pData = req.body;
          const product = await pService.createProduct(pData);
          res.status(201).json(product);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }
    
      async findAll(req, res) {
        try {
          const products = await pService.findAll();
          res.status(201).json(products);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      async findById(req, res) {
        try {
          const id = parseInt(req.params.id);
          const product = await pService.findProductById(id);
          if (product) {
            res.status(200).json(product);
          } else {
            res.status(404).json({ error: "Produto não encontrado" });
          }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      async updateProduct(req, res) {
        try {
          const id = parseInt(req.params.id);
          const pData = req.body;
          const product = await pService.updateProduct(id, pData);
          if (product) {
            res.status(200).json(product);
          } else {
            res.status(404).json({ error: "Produto não encontrado" });
          }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      async deleteProduct(req, res) {
        try {
          const id = parseInt(req.params.id);
          const product = await pService.deleteProduct(id);
          if (product) {
            res.status(200).json(product);
          } else {
            res.status(404).json({ error: "Produto não encontrado" });
          }
        } catch {
          res.status(500).json({ error: error.message });
        }
      }
}

module.exports = new productController();