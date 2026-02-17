
import CartService from "../service/cart-service.js";
const cartService = new CartService();

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id; // comes from JWT
    const cart = await cartService.addToCart(userId, productId, quantity);
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding to cart", error });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await cartService.getUserCart(userId);
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching cart", error });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.id;
    const cart = await cartService.removeFromCart(userId, productId);
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error removing item", error });
  }
};