import {ProductRepository} from '../repository/index.js';
 import Product from '../models/prduct.js';

class ProductService{
    constructor(){
        this.productRepository = new ProductRepository();
    }
    
    async createProduct(data) {
    try {
      if (!data.name || !data.price) {
        throw new Error("Name and price are required");
      }
      const response = await this.productRepository.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in ProductService.createProduct");
      throw error;
    }
  }
async getAllProducts() {
    try {
      const response = await this.productRepository.getAll();
      return response;
    } catch (error) {
      console.log("Something went wrong in ProductService.getAllProducts");
      throw error;
    }
  }
async getProductById(id) {
    try {
      const response = await this.productRepository.get(id);
      if (!response) throw new Error("Product not found");
      return response;
    } catch (error) {
      console.log("Something went wrong in ProductService.getProductById");
      throw error;
    }
  }
 async findProductsByCategory(category) {
    try {
      const response = await this.productRepository.findByCategory(category);
      return response;
    } catch (error) {
      console.log("Something went wrong in ProductService.findProductsByCategory");
      throw error;
    }
  }

 async searchProductsByName(name) {
    try {
      const response = await this.productRepository.SearchByName(name);
      return response;
    } catch (error) {
      console.log("Something went wrong in ProductService.searchProductsByName");
      throw error;
    }
  }
async updateProductStock(id, quantity) {
    try {
      const response = await this.productRepository.updateStock(id, quantity);
      return response;
    } catch (error) {
      console.log("Something went wrong in ProductService.updateProductStock");
      throw error;
    }
  }

}

export default ProductService;