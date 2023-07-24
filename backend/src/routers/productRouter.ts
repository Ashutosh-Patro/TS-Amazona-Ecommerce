import express from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../models/productModel";
export const productRouter = express.Router();

// const app = express();

// app.get("/api/products", (req: Request, res: Response) => {
//   res.json(sampleProducts);
// });

// app.get("/api/products/:slug", (req: Request, res: Response) => {
//   res.json(sampleProducts.find((x) => x.slug === req.params.slug));
// });

// /api/products
productRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    if (products) {
      res.json(products);
    }
  })
);

// /api/slug/tshirt
productRouter.get(
  "/slug/:slug",
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  })
);
