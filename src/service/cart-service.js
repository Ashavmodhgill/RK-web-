 
 import CartRepository from "../repository/cart-repository.js";

class CartService {
  constructor() {
    this.cartRepository = new CartRepository();
  }

  async addToCart(userId, productId, quantity) {
    return await this.cartRepository.addItem(userId, productId, quantity);
  }

  async getUserCart(userId) {
    return await this.cartRepository.getCart(userId);
  }

  async removeFromCart(userId, productId) {
    return await this.cartRepository.removeItem(userId, productId);
  }
}

export default CartService;