import { Request, Response } from 'express';

export function listProducts(req: Request, res: Response) {
  res.send('The list of products');
}
export function getProductById(req: Request, res: Response) {
  res.send('A product');
}
export function createProduct(req: Request, res: Response) {
  res.send('A products created');
}

export function updateProduct(req: Request, res: Response) {
  res.send('A product updated');
}

export function deleteProduct(req: Request, res: Response) {
  res.send('A product deleted');
}
