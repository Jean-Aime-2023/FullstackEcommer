import { Router } from 'express';
import {
  listProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from './productsController';

const router = Router();

router.post('/', createProduct);
router.get('/', listProducts);
router.get('/:id', getProductById);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

export default router;
