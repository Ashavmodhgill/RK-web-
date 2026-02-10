import express from 'express';
import {signup, login} from '../../controller/auth-controller.js';
import {
    createProduct,
    getAllProduct,
    getProductById,
   findProductsByCategory,
   searchProductsByName,
    updateProductStock
} from '../../controller/product-controller.js';


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/product', createProduct);
router.get('/products', getAllProduct);
router.get('/product/:id', getProductById);
router.get('/products/category/:category', findProductsByCategory);
router.get('/products/search/:name', searchProductsByName);
router.put('/product/:id/stock', updateProductStock);

export default router;

