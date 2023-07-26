import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { productModel } from "../models/productModel";

export const productRouter = express.Router();

// /api/products
productRouter.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const products = await productModel.find();
    if (products) {
      res.json(products);
    }
  })
);

// /api/slug/tshirt
productRouter.get(
  "/slug/:slug",
  asyncHandler(async (req: Request, res: Response) => {
    const product = await productModel.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  })
);
