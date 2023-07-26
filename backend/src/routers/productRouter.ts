import express from "express";

export const productRouter = express.Router();

// Functions for Products
import { getAllProducts, getOneProduct } from "../controller/productController";

// /api/products
productRouter.get("/", getAllProducts);

// /api/slug/tshirt
productRouter.get("/slug/:slug", getOneProduct);
