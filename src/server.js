import express from "express";
import productsRouter from "./routes/product.router.js";
import cartsRouter from "./routes/cart.router.js";
import morgan from 'morgan';
import { __dirname } from './utils.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server ok on port ${PORT}`));