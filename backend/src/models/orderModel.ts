import mongoose from "mongoose";
import { productModel } from "./productModel";

const shippingAddressSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// export const shippingAddressModel = mongoose.model(
//   "ShippingAddress",
//   shippingAddressSchema
// );

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    image: { type: Number, required: true },
    price: { type: Number, required: true },
    product: { type: productModel },
  },
  {
    timestamps: true,
  }
);

// export const itemModel = mongoose.model("Items", itemSchema);

const paymentSchema = new mongoose.Schema(
  {
    paymentId: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  {
    timestamps: true,
  }
);

// export const paymentModel = mongoose.model("Payment", paymentSchema);

const orderSchema = mongoose.Schema({
  _id: { type: String },
  orderItems:{type:itemSchema[]}
});
