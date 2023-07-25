import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: Number,
    numReviews: { type: Number, required: true },
    description: String,
  },
  {
    timestamps: true,
  }
);

export const productModel = mongoose.model("Products", productSchema);
