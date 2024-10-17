import { Router } from 'express';
import {
  listProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from './productsController';
import { validateData } from '../../middlewares/validationMiddleware';
import {
  createProductSchema,
  updateProductSchema,
} from '../../db/productsSchema';
import { verifySeller, verifyToken } from '../../middlewares/authMiddleware';

const router = Router();

router.post(
  '/',
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);
router.get('/', listProducts);
router.get('/:id', getProductById);
router.delete('/:id', deleteProduct);
router.put('/:id', validateData(updateProductSchema), updateProduct);

export default router;
