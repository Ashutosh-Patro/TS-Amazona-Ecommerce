import asyncHandler from "express-async-handler";
import { productModel } from "../models/productModel";
import { Request, Response } from "express";

// get all products
export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const products = await productModel.find();
    if (products) {
      res.json(products);
    }
  }
);

// get one product
export const getOneProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await productModel.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  }
);
