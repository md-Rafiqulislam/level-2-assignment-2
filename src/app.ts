
// all the imports here
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/shop/product/product.routes';

// call the express function
const app: Application = express()

// use parser
app.use(express.json());
app.use(cors());
app.use('/api', productRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello programmers in programming hero level 2 assignment 2.');
});

// all the exports here
export default app;