
// all the imports here
import express from 'express';
import { productControlers } from './product.controler';

// make router object
const router = express.Router();

// create product
router.post('/products', productControlers.createProduct);

// get all the products
router.get('/products', productControlers.getAllProdcuts);

// get single product
router.get('/products/:productId', productControlers.getSingleProduct);

// update product information
router.put('/products/:productId', productControlers.updateSingleProductInformation);

// export all the routes
export const productRoutes = router;