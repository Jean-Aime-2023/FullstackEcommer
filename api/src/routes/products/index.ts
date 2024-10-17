import { Router } from 'express';
import {
  listProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from './productsController.js';
import { validateData } from '../../middlewares/validationMiddleware.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../../db/productsSchema.js';
import { verifySeller, verifyToken } from '../../middlewares/authMiddleware.js';

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
