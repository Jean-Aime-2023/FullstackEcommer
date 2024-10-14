import express, { Router } from 'express';
import productsRotes from './routes/products/index'
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const router = Router();

app.use('/products', productsRotes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
