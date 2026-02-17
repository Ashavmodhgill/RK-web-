import Cart from '../models/cart.js';

class cartRepository{
    async addItem(userId, productId, quantity){
       let cart = await Cart.findOne({user: userId})
       if(!cart){
        cart = new Cart({user: userId, items:[]})
       }
       const itemIndex = cart.items.findIndex(item => item.product.toString() === productId.toString());
       if(itemIndex > -1){
        cart.items[itemIndex].quantity += quantity;
       } else {
        cart.items.push({product: productId, quantity: quantity});
       }
       return await cart.save();

    }

    async getCart(userId) {
    return await Cart.findOne({ user: userId }).populate("items.product");
  }

  async removeItem(userId, productId) {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return null;

    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    return await cart.save();
  }

}

export default cartRepository;